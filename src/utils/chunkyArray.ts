const chunkArray = (arr: any[], chunkSize = 3) => {
	const chunkedArr = [];
	const copied = [...arr];
	const numOfChild = Math.ceil(copied.length / chunkSize);

	for (let i = 0; i < numOfChild; i++) {
		chunkedArr.push(copied.splice(0, chunkSize));
	}

	return chunkedArr;
};

export default chunkArray;
