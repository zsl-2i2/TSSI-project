document.getElementById("footer").innerHTML = `
<style>
		div {
			overflow:hidden;
			border: 0px;
			width: 100%;
		}
		#footer{
			margin-top: 30px;
			padding-top: 10px;
			text-align: center;
			font-size: 20px;
			padding-bottom: 10px;
			background-color: #000000;
			color: #d0d0d0;
		}
		#left{
			display: inline-block;
			float:left;
			font-size: 11px;
			color: #ffffff;
			font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
			line-height: 20px;
		}
		#left div {
			float: left;
			text-align: left;
			line-height: 40px;
		}
		#left > p{
			padding-bottom: 10px;
			text-align: left;
		}
		#right{
			padding-top: 0px;
			font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
			line-height: 30px;
		}
		#right > div{
			display: inline-block;
			font-size: 11px;
			float: left;
			text-align: left;
			color: #999;
		}
		
		#dividingLine{
			border-bottom: 1px dotted #0cf;
			height: 0px;
			margin: 0px;
			padding: 0px;
		}
		#right img{
			position: static;
			padding-top: 10px;
		}
		#right a{
			color: #ffffff;
			text-decoration: none;
		}
	
	@media screen and (min-width: 1200px) {
		#left{
			border-right: 1px dotted #0cf;
		}
	}
	</style>
	<div id="footer">
		<div class="col-xl-5 col-12 mb-4" id="left">
			<p class="col-12 text-md-left text-center"><span style="color: #0cf; margin: 0; padding: 0;">Autorami</span> strony są:</p>
			<div class="col-xl-6 col-md-4 col-sm-6 col-12 text-sm-left text-center">
				Filip Corkill<br/>
				Kacper Gałczyk<br/>
				Kamil Gądek
			</div>
			<div class="col-xl-6 col-md-4 col-sm-6 col-12 text-sm-left text-center">
				Aleksander Karagiannakos<br/>
				Joanna Kasprzycka<br/>
				Grzegorz Lenarski
			</div>
		</div>
		<div class="d-xl-none d-inline-block col-md-6 ml-md-4 col-10 offset-md-0 offset-1 mb-1" id="dividingLine"></div>
		<div class="col-xl-7 col-12" id="right">
			<div class="col-12 text-md-left text-center" style="color: #ffffff; padding-bottom: 15px;"><span style="color: #0cf; margin: 0; padding: 0;">Dane</span> kontaktowe</div>
			<div class="col-md-4 col-sm-6 col-12 text-sm-left text-center mb-2">
				<strong>Zespół Szkół Łączności</strong><br/>
				<abbr title="ulica">ul.</abbr> Monte Cassino 31<br/>
				30-337 Kraków<br/>
				<strong>telefon</strong>: 12 269-15-57
			</div>
			<div class="col-md-4 col-sm-6 col-12 text-sm-left text-center mb-5">
				<strong>Internat Zespółu Szkół Łączności</strong><br/>
				<abbr title="ulica">ul.</abbr> Nowaczyńskiego 2<br/>
				30-336 Kraków<br/>
				więcej informacji -
				<a href="https://tl.krakow.pl/kontakt/">Kontakt</a>
			</div>
			<img src="coat_of_arms_footer.png" alt="godlo"/>
		</div>
</div>`;
