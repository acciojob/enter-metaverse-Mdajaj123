//your JS code here. If required.
function removep(){
	const p=document.querySelector("#status");
	const b=document.getElementById("enterBtn")
	const body=document.getElementsByTagName("body")[0];
	body.remove(p);
     // p.innerHTML='<h1>Entered Metaverse</h1>'
	const h=document.createElement("h1");
	h.innerText="Entered Metaverse";
	body.insertBefore(h,b);
	
}

