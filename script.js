//your JS code here. If required.
function removep(){
	const p=document.getElementById("p");
	const b=document.getElementById("btn")
	const body=document.getElementsByTagName("body")[0];
	p.remove();
	const h=document.createElement("h1");
	h.innerText="Entered Metaverse";
	body.insertBefore(h,b);
}

