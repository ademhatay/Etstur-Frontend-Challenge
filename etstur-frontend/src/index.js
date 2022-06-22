import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);


let data = [
	{
		"id": "1",
		"eventUrl": "panorama-1453-tarih-muzesi-21-haziran",
		"eventName": "Panorama 1453 Tarih Müzesi - 21 Haziran",
		"eventDate": "2022",
		"eventDescription": "PANORAMA 1453 TARİH MÜZESİ Dünyanın İlk Tam Panoromik Müzesi İstanbul’un Fethi’nin en önemli anlarının yaşandığı Edirnekapı, Topkapı ve Silivrikapı surlarının yakınında, Fatih Sultan Mehmet Han’ın şehre girdiği kapının yanı başında kurulan müze; dünyanın ilk tam panoramik müzesi olma özelliği taşıyor. 2 bölümden oluşan müzenin ilk bölümünde İstanbul’un kuşatmasının, Fatih Sultan Mehmet’in hayatının, hukuk, sanat, medeniyet, kültür ve İstanbul’u inşa faaliyetlerinin ve savaşların orijinal minyatür, gravür ve resimler eşliğinde anlatıldığı ve günümüz bakış açısıyla fethin resmedildiği modern minyatür çalışmalar sergileniyor. Diğer bölümde ise 8 sanatkârın titiz çalışmasıyla 38 metre çaplı bir yarım küre üzerine yapılan; görenleri 29 Mayıs 1453 gününün şafak vaktine götüren üç boyutlu resim yer alıyor. İstanbul Büyükşehir Belediyesi Kültür AŞ işletmesinde bulunan Panorama 1453 Tarih Müzesi, panoramik tavanı, ses efektleri ve üç boyutlu parçaları sayesinde yılın her günü ziyaretçilerine fetih heyecanını yaşatıyor. Ziyaret: Müzemiz, her gün 08.00 – 18.00 saatleri arasında ziyarete açıktır.",
		"eventCategory": "Müze",
		"eventLocation": "İstanbul",
		"defaultImage": "https://i.imgur.com/XqQXQZS.jpg",
		"eventImages": [
			"https://ippasso.mediatriple.net/event/16122021135440-4.jpeg",
			"https://ippasso.mediatriple.net/event/16122021135440-3.jpeg",
			"https://ippasso.mediatriple.net/event/16122021135439-1.jpeg",
			"https://ippasso.mediatriple.net/event/16122021135440-2.jpeg",
			"https://ippasso.mediatriple.net/event/16122021135440-5.jpeg",
			"https://ippasso.mediatriple.net/event/16122021135440-6.jpeg"
		],
		"isPopular": true,
		"price": 50
	},
	{
		"id": "2",
		"eventUrl": "mikis-theodorakis-orkestrasi",
		"eventName": "Mikis Theodorakis Orkestrası",
		"eventDate": "2019",
		"eventDescription": "Unutulmaz film müziği Zorba the Greek’in bestecisi Mikis Theodorakis, hem müziği hem de politik aktivizmiyle milyonlarca kişiye ilham olan bir müzisyen oldu. Eserleri Yunanistan’ın kültürel mirası haline gelen sanatçı, arkasında oda müziği, opera, senfoni ve 1.000'e yakın şarkıdan oluşan devasa bir katalog bıraktı.1997 yılında O’nunla birlikte çalan müzisyenler ve arkadaşları tarafından kurulan Mikis Theodorakis Orkestrası, en önemli bestelerinin yanı sıra, efsanevi Zorba'dan, hareketli melodilere odaklanacak unutulmaz konser Turkcell Vadi’de sizleri bekliyor !",
		"eventCategory": "Muzik",
		"eventLocation": "Istanbul",
		"defaultImage": "https://i.imgur.com/XqQXQZS.jpg",
		"eventImages": [
			"https://ippasso.mediatriple.net/eventgroup/30052022170239-mikis.jpg",
		],
		"isPopular": true,
		"price": 300
	},
	{
		"id": "3",
		"eventUrl": "hamlet",
		"eventName": "Hamlet",
		"eventDate": "2023",
		"eventDescription": "Hamlet, William Shakespeare tarafından 1599 ile 1601 yılları arasında yazılan temasında trajediyi işleyen oyundur. Danimarka'da geçen oyunda Prens Hamlet'in, kral olan babasını öldürdükten sonra tahta geçen ve annesi Gertrude ile evlenen amcası Claudius'tan nasıl intikam aldığını anlatır.",
		"eventCategory": "Tiyatro",
		"eventLocation": "Izmır",
		"defaultImage": "https://i.imgur.com/XqQXQZS.jpg",
		"eventImages": [
			"https://ippasso.mediatriple.net/event/08062022162258-1.jpg",
			"https://ippasso.mediatriple.net/event/08062022162258-1.jpg"
		],
		"isPopular": false,
		"price": 100
	},
	{
		"id": "4",
		"eventUrl": "muze-gezisi",
		"eventName": "Müze Gezisi",
		"eventDate": "1956",
		"eventDescription": "Okul Tarafından Düzenlenen 1. Geleneksel Online Müze Gezisi.",
		"eventCategory": "Gezi",
		"eventLocation": "online",
		"defaultImage": "https://i.imgur.com/XqQXQZS.jpg",
		"eventImages": [],
		"isPopular": false,
		"price": 50
	},
	{
		"id": "5",
		"eventUrl": "osman-hamdi-bey-sergisi",
		"eventName": "Osman Hamdi Bey Sergisi",
		"eventDate": "2021",
		"eventDescription": "Kaplumbağa Terbiyecisi, Osman Hamdi Bey'in 1906 ve 1907 yıllarında iki farklı versiyonunu çizdiği tablosudur.",
		"eventCategory": "Resim",
		"eventLocation": "İstanbul Beşiktaş",
		"defaultImage": "https://i.imgur.com/XqQXQZS.jpg",
		"eventImages": [
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Osman_Hamdi_Bey_-_The_Tortoise_Trainer_-_Google_Art_Project.jpg/250px-Osman_Hamdi_Bey_-_The_Tortoise_Trainer_-_Google_Art_Project.jpg",
			"https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2021/41/kaplumbaga_terbiyecisi_osman_hamdi_bey_kimdir_osman_hamdi_beyin_hayati_ve_eserleri_1633931190_5252.jpg"
		],
		"isPopular": true,
		"price": 7500
	},
	{
		"id": "6",
		"eventUrl": "50-istanbul-muzik-festivali",
		"eventName": "50. İstanbul Müzik Festivali",
		"eventDate": "2023",
		"eventDescription": "İstanbul Müzik Festivali 50. yılında, İstanbul'a adanan konserlerle müzikseverleri karşılıyor.Geçtiğimiz 50 yıl süresince şehrin kültürel hafızasında büyük yer edinen İstanbul Müzik Festivali, bu önemli kutlama yılında başlığını İstanbul’a, zengin tarihi boyunca farklı kültürlere ev sahipliği yapmış ve nice sanatçıya ilham vermiş bu güzel ve özel şehre adıyor. İsmini, enerjisini ve esinini bu büyülü şehirden alan festival, 50. programında, İstanbul’un çoksesli, çokdilli, çokkültürlü yapısına adanan, zaman zaman geçmiş festivalleri de anımsatan özel projelere ve repertuvarlara yer verecek.İstanbul’un seçkin konser salonlarından yarım yüzyıldır festivale sahne olmuş tarihi ve kültürel alanlarına kadar birçok farklı mekânda Türkiye’den ve dünyadan saygın orkestraları, yıldız solistleri ve toplulukları izleyicisiyle buluşturacak festival, şehre nefes aldıran noktalarda düzenlenecek ücretsiz etkinlikleriyle tüm İstanbulluları bir kez daha kucaklayacak, 50. yılını coşkulu bir biçimde kutlayacak.Duygularımızı güçlendiren, ruhumuzu ve zihnimizi besleyen ve bizleri birleştiren müziğin sihirli dünyasında buluşacağımız nice 50 yıllara!Istanbul Music Festival dedicates its programme to the city of Istanbul in its 50th year.The Istanbul Music Festival has been vital to the cultural memory of the city for the past 50 years. In this benchmark year of celebration, the festival dedicates itself to Istanbul, this magnificent and unique city that has been home to many cultures throughout its complex history and inspired many artists. The festival offers special projects and repertoires in its 50th programme that will mirror the polyphonic, multilingual and multicultural aspects of Istanbul, and remind past festivals at times.The festival will bring together esteemed orchestras, star soloists and ensembles from Turkey and the world in many different venues that range from the distinguished concert halls of Istanbul to the historical and cultural sites that have been the scene of the festival for half a century. The festival will also invite all Istanbulites to admission-free events at breath-taking public venues of the city.To many 50 years enchanted with music...",
		"eventCategory": "Muzik",
		"eventLocation": "Istanbul",
		"defaultImage": "https://i.imgur.com/XqQXQZS.jpg",
		"eventImages": [
			"https://ippasso.mediatriple.net/eventgroup/03032022142036-50imf-KV-PASSO.jpg",
		],
		"isPopular": true,
		"price": 300
	},
	{
		"id": "7",
		"eventUrl": "cok-guzel-hareketler-bunlar-yaz-turnesi",
		"eventName": "Çok Güzel Hareketler 2 - Yaz Turnesi",
		"eventDate": "2023",
		"eventDescription": "Çok Güzel Hareketler 2, seyircisi ile buluşmaya devam ediyor... Biletler sadece EtkinlikAPP'da!",
		"eventCategory": "Tiyatro",
		"eventLocation": "Izmır",
		"defaultImage": "https://i.imgur.com/XqQXQZS.jpg",
		"eventImages": [
			"https://ippasso.mediatriple.net/eventgroup/01052022144901-cok_guzel_hareketler_grup.jpg"
		],
		"isPopular": true,
		"price": 100
	},
	{
		"id": "8",
		"eventUrl": "panorama-1453-tarih-muzesi-22-haziran",
		"eventName": "2. Gün Panorama 1453 Tarih Müzesi - 22 Haziran",
		"eventDate": "2022",
		"eventDescription": "PANORAMA 1453 TARİH MÜZESİ Dünyanın İlk Tam Panoromik Müzesi İstanbul’un Fethi’nin en önemli anlarının yaşandığı Edirnekapı, Topkapı ve Silivrikapı surlarının yakınında, Fatih Sultan Mehmet Han’ın şehre girdiği kapının yanı başında kurulan müze; dünyanın ilk tam panoramik müzesi olma özelliği taşıyor. 2 bölümden oluşan müzenin ilk bölümünde İstanbul’un kuşatmasının, Fatih Sultan Mehmet’in hayatının, hukuk, sanat, medeniyet, kültür ve İstanbul’u inşa faaliyetlerinin ve savaşların orijinal minyatür, gravür ve resimler eşliğinde anlatıldığı ve günümüz bakış açısıyla fethin resmedildiği modern minyatür çalışmalar sergileniyor. Diğer bölümde ise 8 sanatkârın titiz çalışmasıyla 38 metre çaplı bir yarım küre üzerine yapılan; görenleri 29 Mayıs 1453 gününün şafak vaktine götüren üç boyutlu resim yer alıyor. İstanbul Büyükşehir Belediyesi Kültür AŞ işletmesinde bulunan Panorama 1453 Tarih Müzesi, panoramik tavanı, ses efektleri ve üç boyutlu parçaları sayesinde yılın her günü ziyaretçilerine fetih heyecanını yaşatıyor. Ziyaret: Müzemiz, her gün 08.00 – 18.00 saatleri arasında ziyarete açıktır.",
		"eventCategory": "Müze",
		"eventLocation": "İstanbul",
		"defaultImage": "https://i.imgur.com/XqQXQZS.jpg",
		"eventImages": [
			"https://ippasso.mediatriple.net/event/16122021135440-4.jpeg",
			"https://ippasso.mediatriple.net/event/16122021135440-3.jpeg",
			"https://ippasso.mediatriple.net/event/16122021135439-1.jpeg",
			"https://ippasso.mediatriple.net/event/16122021135440-2.jpeg",
			"https://ippasso.mediatriple.net/event/16122021135440-5.jpeg",
			"https://ippasso.mediatriple.net/event/16122021135440-6.jpeg"
		],
		"isPopular": false,
		"price": 50
	},
	{
		"id": "9",
		"eventUrl": "mega-fight-arena-series-1",
		"eventName": "Mega Fight Arena Series 1",
		"eventDate": "2022",
		"eventDescription": "MEGA FIGHT ARENA (MFA) İSTANBUL’DA FIRTINA GİBİ ESECEK…!!! Burak Mataracı ve Birol Topuz tarafından 8 Ekim Cumartesi gecesi Ülker Spor ve Etkinlik Salonunda organize edilecek olan Mega Fight Arena (MFA) dünyanın tanınmış Kick Boks ve Boks yıldızlarını İstanbul’da ringde mücadele ettirmek için son zamanların en önemli maç kartını hazırlayarak Türk ve Dünya seyircisine sunmak için hazırlıklara tam gaz devam ediyor.Türkiye’nin ağır sıklet gururu Cihad Kepenek ile kick boksun efsanesi Hollandalı Errol Zimmerman.Orta sıklet şampiyonumuz Vedat Kahramanoğlu ve Chico Kwasi,Mükremin Güler ile kıran kırana rövanş maçı yapacak olan Dani Traore.Ağır sıkletin efsaneleri Benjamin Adegbuyi ile Tomas Hron geceye damga vuracaklar.Ayrıca sürpriz konuk Bonbon şarkısıyla dünya müzik listelerini kasıp kavuran ünlü şarkıcı “Era Istrefi” canlı performansı ile geceye renk katacaktır. Görsel ışık şovları daha birçok sürpriz konuklar VIP ring kenarı masalar ve Ülker spor salonun mükemmel atmosferi ile Kick Boks ve Boks seyircisi heyecanlı maçlara tanıklık edecektir.",
		"eventCategory": "Spor",
		"eventLocation": "Ankara",
		"defaultImage": "https://i.imgur.com/XqQXQZS.jpg",
		"eventImages": [
			"https://ippasso.mediatriple.net/event/08062022223052-mega-fight-arena-series-kick-boks-ulker-arena-passo.jpeg"
		],
		"isPopular": true,
		"price": 7500
	}
]

export default data;
