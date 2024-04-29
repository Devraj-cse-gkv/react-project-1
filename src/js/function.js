function toggleUser() {
	setTimeout(function () {
		var sub = document.getElementById('userOpt');
		var togImg = document.getElementById('togimg2');
		if (sub.style.display !== "block") {
			sub.style.display = "block";
			sub.style.opacity = "1";
			togImg.style.transform = "rotate(180deg)";
		} else {
			sub.style.display = "none";
			sub.style.opacity = "0";
			togImg.style.transform = "rotate(0deg)";
		}
	}, 200);
}

function toggleNav() {
	var sidebar = document.querySelector('.sidebar');
	if (sidebar.style.left !== '0px') {
		sidebar.style.left = '0px';
	} else {
		sidebar.style.left = '-250px';
	}
}

function togSide() {
	var card = document.getElementById('dropdown');
	var togimg = document.getElementById('tog-img');
	if (card.style.height !== "100%") {
		card.style.height = "100%";
		togimg.style.transform = "rotateX(180deg)";

	} else {
		card.style.height = "38px";
		togimg.style.transform = "rotateX(0deg)";
	}
}

// function setUrl() {
// 	const section = document.getElementById("nav-link");

// 	navlinks.forEach(navlink => {
// 		const newLink = document.createElement('a');
// 		newLink.id = navlink.name;
// 		newLink.href = navlink.link;
// 		newLink.innerText = navlink.name;
// 		section.appendChild(newLink);
// 	});
// }


export { togSide, toggleNav, toggleUser}