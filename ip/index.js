//axios import buraya gelecek
import axios from "axios";
var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek

function cardCreate(bilgi){
    const allCard=document.createElement("div");
    allCard.setAttribute("class","card")

    let image=document.createElement("img");
    image.setAttribute( "src", bilgi.ülkebayrağı)

    const cardinfo=document.createElement("div");
    cardinfo.setAttribute("class","card-info")

    const ipadres=document.createElement("h3");
    ipadres.setAttribute("class","ip")
    ipadres.textContent=bilgi.sorgu

    const country=document.createElement("p");
    country.setAttribute("class","ulke")
    country.textContent=`${bilgi.ülke} (${bilgi.ülkeKodu})`

    const koordinat=document.createElement("p");
    koordinat.textContent=`Enlem:${bilgi.enlem} Boylam:${bilgi.boylam}`

    const city=document.createElement("p");
    city.textContent=`Şehir:${bilgi.şehir}`

    const saat=document.createElement("p");
    saat.textContent=`Saat dilimi:${bilgi.saatdilimi}`

    const para=document.createElement("p");
    para.textContent=`Para birimi:${bilgi.parabirimi}`

    const company=document.createElement("p");
    company.textContent=`ISP:${bilgi.isp}`

    allCard.append(image,cardinfo);
    cardinfo.append(ipadres,country,koordinat,city,saat,para,company);
    return allCard;

}
const cards=document.querySelector(".cards")

ipAdresimiAl().then(()=>{
     axios
     .get("https://apis.ergineer.com/ipgeoapi/" + benimIP)
     .then ((response)=>{cards.append(cardCreate(response.data))}) 
})