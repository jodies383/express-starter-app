module.exports = function () {

	let counter = 0;
	let small = 0;
	let medium = 0;
	let large = 0;
	let status = "Payment Due"
	const order = []

	function add(pizzaId) {
		if (pizzaId === 'small') {
			small += 35.00,
				counter += 35.00;
		}
		else if (pizzaId === 'medium') {
			medium += 65.00,
				counter += 65.00;
		}

		else if (pizzaId === 'large') {
			large += 85.00,
				counter += 85.00;
		}

	}
	function towns(checkedRadioBtn) {
		var cptArr = regNum.filter((reg) => reg.startsWith("CA"))
		var paarlArr = regNum.filter((reg) => reg.startsWith("CJ"))
		var belArr = regNum.filter((reg) => reg.startsWith("CY"))

		if (checkedRadioBtn === "cpt") {
			return cptArr
		} else if (checkedRadioBtn === "paarl") {
			return paarlArr
		} else if (checkedRadioBtn === "bellville") {
			return belArr
		} else if (checkedRadioBtn === "all") {
			return regNum
		} else if (cptArr.length === 0 || paarlArr.length === 0 || belArr.length === 0 || regNum.length === 0) {
			return noTownFound()
		}


	}
	function returnOrder(button) {

		if (counter > 0) {
			order.push({
				orderId: '#' + Math.floor((Math.random() * 100) + 1),
				status: status,
				amount: 'R' + counter.toFixed(2)

			});
		}
		counter = 0;
		small = 0;
		medium = 0;
		large = 0;
		return order;
	}

	function hide(button){
		if (button === "pay") {
			status = "Paid"; 
		}
		return status
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

	function remove(pizzaId) {

	}

	function list() {

	}

	return {
		add,
		hide,
		returnOrder,
		returnCost,
		returnSmall,
		returnMedium,
		returnLarge,
		remove,
		list
	}

}