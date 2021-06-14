document.getElementById("header").innerHTML = `
	<style>
		div{
			text-align: center;
		}
		
		#whole{
		text-align: center;
		margin: 0 auto;
		font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
		overflow: visible;
		}
	
	.block{
		text-align: center;
		background: rgb(73,85,122);
		height: 10px;
		margin-bottom: 5px;
		margin-top: 5px;
		}
	
	#logo{
		float: left;
	}
	
	#headerTitle{
		font-size: 33px;
		font-family:"Georgia", serif;
		font-weight: 600;
	}
	
	#menu{
		overflow: visible;
	}
	
	nav{
		overflow: visible;
	}
		
	nav ul{
		margin: 0;
		padding: 0;
		display: inline;
		}
	
	nav ul li{
		list-style-type: none;
		padding: 10px;
		margin: 0;
		display: inline-block;
		cursor: pointer;
		}
	
	nav ul li a{
		text-decoration: none;
		color: rgb(73,85,122);
		padding: 10px;
		}
	
	.button{
		position: relative;
		overflow: visible;
		border-right: 2px solid rgb(73,85,122);
		}
	
	.button > a{
		text-decoration: none;
	}
	
	.button > ul{
		position: absolute;
		right: -2px;
		top: 100%;
		background-color: white;
		z-index: 5;
		display: none;
	}
	
	.button > ul > li{
		position: relative;
		border-right: 2px solid rgb(73,85,122);
		border-bottom: 2px solid rgb(73,85,122);
		background: #FDFDFD;
	}
	
	.transparency{
		position: absolute;
		top: 0px;
		left: -30px;
		width: 30px;
		height: 105%;
		background: -moz-linear-gradient(right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%); /* FF3.6-15 */
		background: -webkit-linear-gradient(right, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%); /* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(to left, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 */
	}
	
	li:hover > .transparency{
		position: absolute;
		top: -2px;
		left: -30px;
		width: 30px;
		height: 105%;
		background: -moz-linear-gradient(right, rgba(73,85,122,1) 0%, rgba(255,255,255,0) 100%); /* FF3.6-15 */
		background: -webkit-linear-gradient(right, rgba(73,85,122,1) 0%,rgba(255,255,255,0) 100%); /* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(to left, rgba(73,85,122,1) 0%,rgba(255,255,255,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#49557A', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 */
	}
	
	.button > ul > li > a{
		text-decoration: none;
	}
	
	.button:hover > ul{
		display: block;
	}
	
	.button:hover{
		background: rgb(73,85,122);
	}
	
	.button:hover > a{
		color: #FFFFFF;
	}
	
	.button > ul > li:hover > a{
		color: #FFFFFF;
	}
	
	.button > ul > li:hover{
		background: rgb(73,85,122);
	}
	
	#main-site{
		border-right: 2px solid rgb(73,85,122);
		height: 50px;
	}
	
	#main-site:hover > a{
		color: #FFFFFF;
		background: rgb(73,85,122);
	}
	
	#toggle-menu-text{
		height: inherit;
		display: inline-block;
		float: left;
		font-size: 5vw;
	}
	
	#toggler-icon-div{
		display: inline-block;
		cursor: pointer;
	}
		
	#toggler-icon-div > img{
		position: static;
		width: 100%;
	}
	
	.toggleButton{
		text-align: left;
		border-right: 2px solid rgb(73,85,122);
		border-bottom: 2px solid rgb(73,85,122);
	}
	
	#infoLi > ul{
		display: none;
	}
	
	.toggleButton > a{
		text-decoration: none;
		display: block;
		width: 100%;
	}
	
	.toggleButton > ul > li{
		border-bottom: 2px solid rgb(73,85,122);
		background: #FDFDFD;
	}
	
	.toggleButton > ul > li > a{
		text-decoration: none;
		color: rgb(73,85,122);
	}
	
	.toggleButton:hover{
		background-color: rgb(73,85,122);
	}
	
	#infoLi:hover > ul{
		display: block;
	}
	
	.toggleButton:hover > a{
		color: #FFFFFF;
	}
	
	.toggleButton > ul > li:hover > a{
		color: #FFFFFF;
	}
	
	.toggleButton > ul > li:hover{
		background-color: rgb(35,40,54);
	}
		
					/* bootstrapowe klasy ale w media query */
	
	/* extra-large */
	
	@media screen and (min-width: 1200px) {
		#logo{
			padding-bottom: 2px;
		}
		#headerTitle{
			padding-top: 5px;
		}
	}
	
	/* large */
	
	@media screen and (max-width: 1199px) and (min-width: 992px) {
		#logo{
			padding-bottom: 2px;
		}
		#headerTitle{
			padding-top: 5px;
		}
	}
	
	/* medium */
	
	@media screen and (max-width: 991px) and (min-width: 768px) {
		#logo{
			padding-top: 18px;
		}
	}
	
	/* small */
	
	@media screen and (max-width: 767px) and (min-width: 576px) {
		#logo{
			padding-top: 20px;
		}
	}
	
	/* extra-small */
	
	@media screen and (max-width: 575px) {
		#headerTitle{
			font-size: 25px;
		}
		
		#logo{
			padding-top: 5px;
		}
		
		#toggle-menu-text{
			font-size: 8vw;
		}
	}
	</style>
	
	<div id="whole">
		<div id="logo" class="col-xl-2 col-md-4 col-4">
			<img src="Grafiki/MENU/logo.png" alt="logo">
		</div>
		<div id="headerTitle" class="col-xl-10 col-md-8 col-8">
			coś nie siadło z tytułem w nagłówku (nawet dziad coś nie załadował tu nic)
		</div>
	
		<div class="block">
		</div>
	
	<div id="menu" class="d-md-block d-none">
		<nav class="d-md-block d-none">
			<ul>
				<li class="button"><a href="index.html">Technik Informatyk</a>
					<ul>
						<li class="col-12 d-block"><a href="UTK.html">Urządzenia Techniki komputerowej</a><div class="transparency"></div></li>
						<li class="col-12 d-block"><a href="SO.html">Systemy Operacyjne</a><div class="transparency"></div></li>
						<li class="col-12 d-block"><a href="SK.html">Sieci komputerowe</a><div class="transparency"></div></li>
						<li class="col-12 d-block"><a href="SSO.html">Sieciowe Systemy Operacyjne</a><div class="transparency"></div></li>
						<li class="col-12 d-block"><a href="TSSI.html">Tworzenie statycznych stron internetowych</a><div class="transparency"></div></li>
						<li class="col-12 d-block"><a href="BD.html">Bazy danych</a><div class="transparency"></div></li>
					</ul>
				</li>
				<li class="button"><a href="tech-prog.html">Technik Programista</a></li>
				<li class="button"><a href="tech-ele.html">Technik Elektronik</a></li>
				<div class="d-xl-none d-md-inline-block w-100"></div>
				<li class="button"><a href="tech-tele.html">Technik Teleinformatyk</a></li>
				<li id="main-site"><a href="https://tl.krakow.pl" style="text-decoration: none;">Strona Główna ZSŁ</a></li>
			</ul>
		</nav>
	</div>
	<div id="toggle-menu" class="col-12 d-md-none d-block">
		<div id="toggle-menu-text" class="col-4"> Menu </div>
		<div id="toggler-icon-div" class="col-sm-2 col-3 offset-4" onclick="displayToggleMenu();"><img src="Grafiki/MENU/toggler.png"/></div>
		<div id="extended-toggle-menu" class="col-12 d-none">
			<nav class="col-12">
				<ul>
					<li id="infoLi" class="toggleButton d-block"><a href="index.html">Technik Informatyk</a>
						<ul>
							<li class="col-11 d-block offset-1"><a href="UTK.html">Urządzenia Techniki komputerowej</a></li>
							<li class="col-11 d-block offset-1"><a href="SO.html">Systemy Operacyjne</a></li>
							<li class="col-11 d-block offset-1"><a href="SK.html">Sieci komputerowe</a></li>
							<li class="col-11 d-block offset-1"><a href="SSO.html">Sieciowe Systemy Operacyjne</a></li>
							<li class="col-11 d-block offset-1"><a href="TSSI.html">Tworzenie statycznych stron internetowych</a></li>
							<li class="col-11 d-block offset-1"><a href="BD.html">Bazy danych</a></li>
						</ul>
					</li>
					<li class="toggleButton d-block"><a href="tech-prog.html">Technik Programista</a></li>
					<li class="toggleButton d-block"><a href="tech-ele.html">Technik Elektronik</a></li>
					<li class="toggleButton d-block"><a href="tech-tele.html">Technik 	Teleinformatyk</a></li>
					<li class="toggleButton d-block"><a href="https://tl.krakow.pl" style="text-decoration: none;">Strona Główna ZSŁ</a></li>
				</ul>
			</nav>
		</div>
	</div>
	<div class="block">
	</div>
	
	</div>
`;
document.getElementById("headerTitle").innerHTML = document.getElementById("headerText").innerHTML;
var isToggled = false;
function displayToggleMenu(){
	if(isToggled==false){
		document.getElementById("extended-toggle-menu").className = "col-12 d-block";
		isToggled = true;
	}else{
		document.getElementById("extended-toggle-menu").className = "col-12 d-none";
		isToggled = false;
	}
}
