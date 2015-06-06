// Modified from the bookmarklet made by squarefree
// https://www.squarefree.com/bookmarklets/flash.html

// PercentLoaded
// IsPlaying
// Rewind
// GetVariable, SetVariable

flashlengths = {
	// A1
	1931: -1, 1977: 544, 1982: 827, 1988: 391, 1990: -1, 2010: -1, 2037: 1201, 2038: -1, 2040: 130, 2077: 120, 2086: 173, 2122: 917, 2146: 1124,
	// A2
	2150: 1074, 2151: 473, 2153: -1, 2207: 620, 2238: -1, 2288: -1, 2293: -1, 2297: -1, 2300: -1, 2318: 74, 2322: 511, 2323: 97, 2324: 699,
	2344: 1126, 2376: -1, 2401: 179, 2544: 433, 2551: 680, 2565: 2011, 2621: 1071, 2655: 1049, 2657: 3859,
	// A3
	2669: -1, 2672: -1, 2722: 1197, 2725: 289, 2726: 153, 2730: -1, 2733: 2151, 2736: 2102, 2743: 1117, 2771: 1575, 2779: 1616, 2818: -1,
	2838: 1999, 2848: 1063, 2879: 645, 2880: 3034, 2926: 2658, 2970: 1784, 2973: 4943, 3049: 5510,
	// I
	3054: 179, 3167: 1633,
	// A4
	3258: -1, 3307: 2009, 3541: 1900, 3556: 408, 3568: 4301, 3585: -1, 3620: -1, 3701: 3316, 3831: 4148, 3840: 6972,
	// A5
	4478: 4803, 4526: 3813, 4687: 1994, 4692: -1, 4748: 4880, 4827: 5505, 4888: 3143, 4901: 3200, 4979: -1, 4987: 4216, 5197: 4263, 5221: -1,
	5338: -1, 5420: 1801, 5539: 1006, 5546: 283, 5559: 423, 5566: 302, 5579: 1290, 5595: -1, 5596: 2426, 5614: 769, 5617: 206, 5618: 236,
	5625: -1, 5630: 359, 5643: 806, 5644: 2742, 5660: 4932, 5661: 126, 5662: 242, 5751: 287, 5760: 699, 5774: -1, 5795: -1, 5836: 108,
	5843: 240, 5852: 345, 5874: 257, 5902: 257, 5918: 653, 5919: 156, 5953: 776, 5984: 816, 5985: 3488, 5999: 257, 6000: -1, 6009: -1,
	// I2
	6011: 4332,
	// A6A1
	6013: 5025, 6021: 103, 6062: 103, 6094: 103, 6175: 414, 6182: 1352, 6273: 1356, 6288: 240, 6290: 5079,
	// A6A2
	6369: 105, 6385: 217, 6386: 3900, 6416: 757, 6441: -1, 6468: 757, 6472: 5292, 6517: 780, 6565: 4320, 6715: 2334,
	// A6A3
	6720: -1, 6725: -1, 6727: -1, 6842: 734, 6844: 4448, 6927: 3925, 6930: 42, 6932: 61, 6934: 21, 6952: 21, 6970: 21, 6978: 21, 6984: 21,
	7037: 21, 7103: 212, 7117: 240, 7136: 148, 7138: 2864, 7139: 83, 7151: 189, 7152: 1906, 7158: 233, 7159: 233, 7160: 233, 7161: 8677,
	7268: 764, 7273: 417, 7274: 510, 7275: 499, 7276: 896, 7277: 370, 7327: 2056,
	// A6A4
	7338: 6248, 7340: 358, 7371: -1, 7372: -1, 7373: -1, 7374: -1, 7385: 463, 7394: 46, 7395: 450,
	// A6A5
	7412: 2849, 7555: 5095, 7611: 938, 7612: 697, 7613: 71, 7614: 1015, 7624: -1, 7626: -1, 7635: 139, 7636: 239, 7637: -1, 7640: -1, 7659: -1,
	7663: -1, 7664: 1097, 7676: -1, 7677: 3984, 7680: 78, 7687: 287, 7881: 2229, 7897: 420, 7931: 168, 7946: 235, 7966: 1209, 7973: 629,
	8040: 277, 8104: 169, 8105: -1, 8131: 2665,
	// A6A6
	8137: 251, 8138: 31, 8139: 207, 8140: 196, 8143: 2809, 8178: 2306, 8179: -1, 8184: 69, 8199: 704, 8282: -1, 8297: -1, 8300: -1, 8301: -1,
	8305: -1, 8316: -1, 8452: 151, 8552: 500, 8801: 6636, 8820: 431, 8843: 414, 8986: 420, 8998: 2989, 9000: 1179, 9001: -1, 9025: 256,
	9305: 1976, 9308: 431,
	// A6A6A5
	9309: 1700, 9310: 151, 9311: 236, 9312: 180, 9313: 270, 9314: 167, 9315: 151, 9316: 211, 9317: 189, 9318: 151, 9319: 220, 9320: 173,
	9321: 206, 9322: 151, 9323: 151, 9324: 207, 9325: 172, 9326: 186, 9327: 151, 9328: 230, 9329: 151, 9330: 151, 9331: 207, 9332: 151,
	9333: 169, 9334: 151, 9335: 212, 9336: 177, 9337: 151, 9338: 165, 9339: 151, 9340: 151, 9341: 179, 9342: 182, 9343: 220, 9344: 151,
	9345: 199,
	// A6A6I5
	9349: 4507, 9386: -1
};

function initFlashControls() {
	var x = document.embeds;
	if ((x.length > (document.location.pathname == "/trickster.php" || document.location.pathname == "/index_hscrollb.php"))
		&& (flashlengths[pageno] != -1)) {
		var flash = x[x.length - 1];
		addFlashControls(flash);
	}
}

function addFlashControls(flash) {
	// MSPA uses inconsistent subdomaining
	// Convert flash to appropriate subdomain
	var i = flash.src.indexOf("mspaintadventures.com") + 21;
	if ((i != 20) && (flash.src.substr(0, i) != document.location.origin)) {
		var tempflash = flash.cloneNode();
		tempflash.src = document.location.origin + flash.src.slice(i);
		flash.insertAdjacentElement("afterEnd", tempflash);
		flash.parentElement.removeChild(flash);
		flash = tempflash;
	}
	
	var controlsDiv = document.createElement("div");
	flash.insertAdjacentElement("afterEnd", controlsDiv);
	
	var table = document.createElement("table");
	table.width = "650px";
	controlsDiv.appendChild(table);
	
	var row = table.insertRow(-1);
	
	var pauseButton = document.createElement("button");
	pauseButton.innerText = "Pause";
	
	var buttonCell = row.insertCell(-1);
	buttonCell.appendChild(pauseButton);
	pauseButton.onclick = pauseUnpause;
	
	var sliderCell = row.insertCell(-1);
	sliderCell.style.width = "100%";
	var slider = document.createElement("input");
	slider.style.width = "100%";
	slider.type = "range";
	slider.min = 0;
	if (pageno in flashlengths) {
		slider.max = flashlengths[pageno];
	} else {
		slider.max = 0;	// Actually set during first run of update
	}
	slider.value = 0;
	sliderCell.appendChild(slider);
	var sliderWidth;
	var paused = false;
	var dragging = false;
	slider.oninput = function () {
		if (slider.value == flashlengths[pageno]) {
			flash.GotoFrame(slider.value - 1);
		} else {
			flash.GotoFrame(slider.value);
		}
	};
	slider.onchange = function() {
		if (paused) {
			flash.StopPlay();
		} else {
			flash.Play();
		}
	};
	
	window.setInterval(update, 33);

	function pauseUnpause() {
		if (flash.Play) {
			paused = !paused;
			if (paused) {
				pauseButton.style.borderStyle = "inset";
				flash.StopPlay();
			} else {
				pauseButton.style.borderStyle = "";
				flash.Play();
			}
		}
	}

	function update() {
		if (flash.CurrentFrame) {
			if (flash.CurrentFrame() > slider.max) {
				// Not the most efficient of checks, but it works in a lot of edge cases
				slider.max = flash.TotalFrames();
			}
			slider.value = flash.CurrentFrame();
		}
	}
}