module.exports = (name, perc) => `<center>
<style>
	.signature,
	.title {
		float: left;
		border-top: 1px solid #000;
		width: 200px;
		text-align: center;
	}
</style>
<div
	style="
		width: 800px;
		height: 500px;
		padding: 20px;
		text-align: center;
		border: 10px solid #3f51b5 !important;
	"
>
	<div
		style="
			width: 750px;
			height: 450px;
			padding: 20px;
			text-align: center;
			border: 5px solid #3f51b5 !important;
		"
	>
		<span style="font-size: 50px; font-weight: bold;">Certificate</span>
		<br /><br />
		<span style="font-size: 25px;"><i>This is to certify that</i></span>
		<br /><br />
		<span style="font-size: 30px;"><b>${name}</b></span><br /><br />
		<span style="font-size: 25px;"><i>has scored</i></span>
		<br /><br />
		<span style="font-size: 30px;">${perc}%</span> <br /><br />
		<span style="font-size: 20px;"
			>in <a href="https://quizappreact.netlify.app">React Quiz App</a> </span
		>
		<br /><br /><br /><br />
		<span style="font-size: 25px;"><i>Attempt Date</i></span
		><br />
		<span style="font-size: 25px;"><i>${new Date().toLocaleDateString()}</i></span
		><br />
	</div>
</div>
</center>
`;
