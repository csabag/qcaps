function goTo(myid) {
    let e = document.getElementById(myid);
    console.log('clicked ' + e.innerHTML);
    e.scrollIntoView({behavior: "smooth", block: 'start' });
}