"""CSV cleanup demo. Python 3 standard library only.
Usage: python clean_csv.py input.csv output.csv
Trims surrounding whitespace; removes empty rows and exact duplicates.
Never overwrites an existing output. Review output before using business data.
"""
import csv
import sys
from pathlib import Path

def clean(source, destination):
    with Path(source).open(encoding='utf-8-sig', newline='') as handle:
        rows = [[value.strip() for value in row] for row in csv.reader(handle, strict=True)]
    rows = [row for row in rows if any(row)]
    if not rows:
        raise ValueError('A header is required.')
    header, records = rows[0], rows[1:]
    if any(len(row) != len(header) for row in records):
        raise ValueError('Row widths do not match the header.')
    unique = list(dict.fromkeys(tuple(row) for row in records))
    with Path(destination).open('x', encoding='utf-8', newline='') as handle:
        writer = csv.writer(handle)
        writer.writerow(header)
        writer.writerows(unique)
    return len(unique), len(records) - len(unique)

if __name__ == '__main__':
    if len(sys.argv) != 3:
        raise SystemExit('Usage: python clean_csv.py input.csv output.csv')
    try:
        kept, removed = clean(sys.argv[1], sys.argv[2])
        print(f'Kept {kept} records; removed {removed} duplicates.')
    except (OSError, ValueError, csv.Error) as error:
        raise SystemExit(str(error))
