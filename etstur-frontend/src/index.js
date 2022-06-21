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
		"event-url": "teomanın-koyu-antolojisi",
		"eventName": "Teoman'ın Koyu Antoloji'si",
		"event-date": "2019",
		"eventDescription": "İstanbul’u içine çekmiş ve nefesini şarkılarıyla sunmuş bir yazar Teoman. Beyoğlu’nda sahneye çıktığı efsane rock grubu Indians’dan bugüne kadar rock’tan beslense de yıllar geçip yepyeni şarkılara hayat verdikçe hayranı olduğu Leonard Cohen’e göz kırpan bir şarkı yazarlığına yöneldi. Yer yer Serge Gainsbourg’un da stiline selam duran şarkı yazarının kariyeri, pek çok ticari başarı sağlamış şarkıyla dolu. Türkiye’nin tartışmasız en büyük rock yıldızlarından biri o. 2018’de Teoman, yan yana gelince bir ahenk yaratan, birbirine en çok yakışan 26 şarkısını Koyu Antoloji albümünde bir araya getirdi. Hit şarkılarının yanı sıra geri planda kalmış bestelerini yeni, dingin düzenlemelerle sunan albümde Teoman’ın trajik, sıradan, büyülü hikâyelerini dinledik. Müzik, sinema ve yazarlık ile yavaşça damıtılan 10 albümün bir özetine şahit olmak için daha uygun bir konser olamaz. Teoman’ın 21 yıllık kariyerinde biriktirdiği çok özel hikâyelere ortak olmak için 6 Temmuz akşamı Harbiye Cemil Topuzlu Açıkhava Tiyatrosu’nda buluşalım.",
		"event-category": "Sohbet",
		"event-location": "Istanbul",
		"defaultImage": "https://i.imgur.com/XqQXQZS.jpg",
		"eventImages": [
			"https://ippasso.mediatriple.net/event/08062022162258-1.jpg",
			"https://ippasso.mediatriple.net/event/08062022162258-1.jpg"
		],
		"isPopular": true,
		"price": 300
	},
	{
		"id": "2",
		"event-url": "hamlet",
		"eventName": "Hamlet",
		"event-date": "2023",
		"eventDescription": "Hamlet, William Shakespeare tarafından 1599 ile 1601 yılları arasında yazılan temasında trajediyi işleyen oyundur. Danimarka'da geçen oyunda Prens Hamlet'in, kral olan babasını öldürdükten sonra tahta geçen ve annesi Gertrude ile evlenen amcası Claudius'tan nasıl intikam aldığını anlatır.",
		"event-category": "Tiyatro",
		"event-location": "Izmır",
		"defaultImage": "https://i.imgur.com/XqQXQZS.jpg",
		"eventImages": [
			"https://ippasso.mediatriple.net/event/08062022162258-1.jpg",
			"https://ippasso.mediatriple.net/event/08062022162258-1.jpg"
		],
		"isPopular": false,
		"price": 100
	},
	{
		"id": "3",
		"event-url": "muze-gezisi",
		"eventName": "Müze Gezisi",
		"event-date": "1956",
		"eventDescription": "Okul Tarafından Düzenlenen 1. Geleneksel Online Müze Gezisi.",
		"event-category": "Gezi",
		"event-location": "online",
		"defaultImage": "https://i.imgur.com/XqQXQZS.jpg",
		"eventImages": [],
		"isPopular": false,
		"price": 50
	},
	{
		"id": "4",
		"event-url": "osman-hamdi-bey-sergisi",
		"eventName": "Osman Hamdi Bey Sergisi",
		"event-date": "2022",
		"eventDescription": "Kaplumbağa Terbiyecisi, Osman Hamdi Bey'in 1906 ve 1907 yıllarında iki farklı versiyonunu çizdiği tablosudur.",
		"event-category": "Resim",
		"event-location": "İstanbul Beşiktaş",
		"defaultImage": "https://i.imgur.com/XqQXQZS.jpg",
		"eventImages": [
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Osman_Hamdi_Bey_-_The_Tortoise_Trainer_-_Google_Art_Project.jpg/250px-Osman_Hamdi_Bey_-_The_Tortoise_Trainer_-_Google_Art_Project.jpg",
			"https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2021/41/kaplumbaga_terbiyecisi_osman_hamdi_bey_kimdir_osman_hamdi_beyin_hayati_ve_eserleri_1633931190_5252.jpg"
		],
		"isPopular": true,
		"price": 7500
	},
	{
		"id": "5",
		"event-url": "teomanın-koyu-antolojisi",
		"eventName": "Teoman'ın Koyu Antoloji'si copy",
		"event-date": "2019",
		"eventDescription": "İstanbul’u içine çekmiş ve nefesini şarkılarıyla sunmuş bir yazar Teoman. Beyoğlu’nda sahneye çıktığı efsane rock grubu Indians’dan bugüne kadar rock’tan beslense de yıllar geçip yepyeni şarkılara hayat verdikçe hayranı olduğu Leonard Cohen’e göz kırpan bir şarkı yazarlığına yöneldi. Yer yer Serge Gainsbourg’un da stiline selam duran şarkı yazarının kariyeri, pek çok ticari başarı sağlamış şarkıyla dolu. Türkiye’nin tartışmasız en büyük rock yıldızlarından biri o. 2018’de Teoman, yan yana gelince bir ahenk yaratan, birbirine en çok yakışan 26 şarkısını Koyu Antoloji albümünde bir araya getirdi. Hit şarkılarının yanı sıra geri planda kalmış bestelerini yeni, dingin düzenlemelerle sunan albümde Teoman’ın trajik, sıradan, büyülü hikâyelerini dinledik. Müzik, sinema ve yazarlık ile yavaşça damıtılan 10 albümün bir özetine şahit olmak için daha uygun bir konser olamaz. Teoman’ın 21 yıllık kariyerinde biriktirdiği çok özel hikâyelere ortak olmak için 6 Temmuz akşamı Harbiye Cemil Topuzlu Açıkhava Tiyatrosu’nda buluşalım.",
		"event-category": "Sohbet",
		"event-location": "Istanbul",
		"defaultImage": "https://i.imgur.com/XqQXQZS.jpg",
		"eventImages": [
			"https://ippasso.mediatriple.net/event/08062022162258-1.jpg",
			"https://ippasso.mediatriple.net/event/08062022162258-1.jpg"
		],
		"isPopular": true,
		"price": 300
	},
	{
		"id": "6",
		"event-url": "hamlet ",
		"eventName": "Hamlet copy",
		"event-date": "2023",
		"eventDescription": "Hamlet, William Shakespeare tarafından 1599 ile 1601 yılları arasında yazılan temasında trajediyi işleyen oyundur. Danimarka'da geçen oyunda Prens Hamlet'in, kral olan babasını öldürdükten sonra tahta geçen ve annesi Gertrude ile evlenen amcası Claudius'tan nasıl intikam aldığını anlatır.",
		"event-category": "Tiyatro",
		"event-location": "Izmır",
		"defaultImage": "https://i.imgur.com/XqQXQZS.jpg",
		"eventImages": [
			"https://ippasso.mediatriple.net/event/08062022162258-1.jpg",
			"https://ippasso.mediatriple.net/event/08062022162258-1.jpg"
		],
		"isPopular": true,
		"price": 100
	},
	{
		"id": "7",
		"event-url": "muze-gezisi",
		"eventName": "Müze Gezisi copy",
		"event-date": "1956",
		"eventDescription": "Okul Tarafından Düzenlenen 1. Geleneksel Online Müze Gezisi.",
		"event-category": "Gezi",
		"event-location": "online",
		"defaultImage": "https://i.imgur.com/XqQXQZS.jpg",
		"eventImages": [],
		"isPopular": true,
		"price": 50
	},
	{
		"id": "8",
		"event-url": "osman-hamdi-bey-sergisi copy",
		"eventName": "Osman Hamdi Bey Sergisi",
		"event-date": "2022",
		"eventDescription": "Kaplumbağa Terbiyecisi, Osman Hamdi Bey'in 1906 ve 1907 yıllarında iki farklı versiyonunu çizdiği tablosudur.",
		"event-category": "Resim",
		"event-location": "İstanbul Beşiktaş",
		"defaultImage": "https://i.imgur.com/XqQXQZS.jpg",
		"eventImages": [
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Osman_Hamdi_Bey_-_The_Tortoise_Trainer_-_Google_Art_Project.jpg/250px-Osman_Hamdi_Bey_-_The_Tortoise_Trainer_-_Google_Art_Project.jpg",
			"https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2021/41/kaplumbaga_terbiyecisi_osman_hamdi_bey_kimdir_osman_hamdi_beyin_hayati_ve_eserleri_1633931190_5252.jpg"
		],
		"isPopular": false,
		"price": 7500
	}
]

export default data;
