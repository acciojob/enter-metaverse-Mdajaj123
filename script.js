//your JS code here. If required.
function removep(){
	const p=document.getElementByquerySelector("#status");
	const b=document.getElementById("enterBtn")
	const body=document.getElementsByTagName("body")[0];
     p.innerText="Entered Metaverse"
	p.remove();
	const h=document.createElement("h1");
	h.innerText="Entered Metaverse";
	body.insertBefore(h,b);
}

