'use strict';
function parseCSV(text){
 text=text.replace(/^\uFEFF/,'');const rows=[];let row=[],field='',quoted=false,closed=false;
 for(let i=0;i<text.length;i++){const c=text[i];
  if(quoted){if(c==='"'){if(text[i+1]==='"'){field+='"';i++;}else{quoted=false;closed=true;}}else field+=c;continue;}
  if(closed&&c!==','&&c!=='\r'&&c!=='\n'&&c!==' '&&c!=='\t')throw Error('Unexpected character after closing quote.');
  if(c==='"'){if(field.trim()||closed)throw Error('Unexpected quote inside an unquoted field.');field='';quoted=true;}
  else if(c===','){row.push(field);field='';closed=false;}
  else if(c==='\n'||c==='\r'){if(c==='\r'&&text[i+1]==='\n')i++;row.push(field);rows.push(row);row=[];field='';closed=false;}
  else if(!closed)field+=c;
 }
 if(quoted)throw Error('Unclosed quoted field.');
 if(field!==''||row.length||closed){row.push(field);rows.push(row);}return rows;
}
function cleanCSV(text){const rows=parseCSV(text).map(r=>r.map(v=>v.trim())).filter(r=>r.some(Boolean));if(!rows.length)throw Error('Add a CSV with a header first.');const header=rows.shift();if(rows.some(r=>r.length!==header.length))throw Error('Row widths do not match the header. Check the CSV before cleaning.');const seen=new Set(),unique=[];for(const row of rows){const k=JSON.stringify(row);if(!seen.has(k)){seen.add(k);unique.push(row);}}const encode=v=>/[",\n\r]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v;return {csv:[header,...unique].map(r=>r.map(encode).join(',')).join('\r\n')+'\r\n',kept:unique.length,removed:rows.length-unique.length};}
if(typeof module!=='undefined')module.exports={parseCSV,cleanCSV};
if(typeof document!=='undefined'){
 const input=document.querySelector('#input'),output=document.querySelector('#output'),status=document.querySelector('#status'),download=document.querySelector('#download');const sample=input.value;
 function clear(){output.value='';download.disabled=true;status.textContent='Input changed. Clean it to update the result.';}
 input.addEventListener('input',clear);
 document.querySelector('#clean').onclick=()=>{try{if(input.value.length>2*1024*1024)throw Error('Please use an input under 2 MB.');const r=cleanCSV(input.value);output.value=r.csv;download.disabled=false;status.textContent=`Kept ${r.kept} records; removed ${r.removed} duplicates. Empty rows removed; header preserved.`;}catch(e){output.value='';download.disabled=true;status.textContent=e.message;}};
 document.querySelector('#sample').onclick=()=>{input.value=sample;clear();};
 document.querySelector('#file').onchange=async e=>{try{const f=e.target.files[0];if(!f)return;if(f.size>2*1024*1024)throw Error('Please choose a file under 2 MB.');input.value=await f.text();clear();}catch(e){status.textContent=e.message;}};
 download.onclick=()=>{const u=URL.createObjectURL(new Blob([output.value],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=u;a.download='cleaned.csv';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);};
}
