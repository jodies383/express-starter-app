module.exports = function () {

	let counter = 0;
	let small = 0;
	let medium = 0;
	let large = 0;
	const order = []

	function add(pizzaId) {
		if (pizzaId === 'buy small') {
			small += 35.00,
				counter += 35.00;
		}
		else if (pizzaId === 'buy medium') {
			medium += 65.00,
				counter += 65.00;
		}

		else if (pizzaId === 'buy large') {
			large += 85.00,
				counter += 85.00;
		}

	}
	function addBtns(pizzaId) {

		if (pizzaId === 'smallPlus') {
			small += 35.00,
				counter += 35.00;
		}
		else if (pizzaId === 'smallMinus') {
			if (counter > 0 && small > 0) {
				small -= 35.00,
					counter -= 35.00;
			}
		}
		else if (pizzaId === 'medPlus') {
			medium += 65.00,
				counter += 65.00;
		}
		else if (pizzaId === 'medMinus') {
			if (counter > 0 && medium > 0) {
				medium -= 65.00,
					counter -= 65.00;
			}
		}
		else if (pizzaId === 'largePlus') {
			large += 85.00,
				counter += 85.00;
		}
		else if (pizzaId === 'largeMinus') {
			if (counter > 0 && large > 0) {
				large -= 85.00,
					counter -= 85.00;
			}
		}
	}

	function returnOrder() {

		if (counter > 0) {
			order.push({
				orderId: '#' + Math.floor((Math.random() * 100) + 1),
				status: "payment due",
				amount: 'R' + counter.toFixed(2)
			});
		}
		counter = 0;
		small = 0;
		medium = 0;
		large = 0;
		return order;
	}

	function hide(button) {
		if (button === "pay") {
			return "Paid";
		}
		
	}
	function returnCost() {
		return counter.toFixed(2);
	}
	function returnSmall() {
		return small.toFixed(2);
	}
	function returnMedium() {
		return medium.toFixed(2);
	}
	function returnLarge() {
		return large.toFixed(2);
	}


	return {
		add,
		addBtns,
		hide,
		returnOrder,
		returnCost,
		returnSmall,
		returnMedium,
		returnLarge
	}

}