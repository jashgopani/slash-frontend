const mockProducts = [
	{
		title: 'Oyoyo',
		imgSrc: 'http://dummyimage.com/200x300.png/dddddd/000000',
		marketplace: 'amazon',
		price: '$670.50',
		currency: 'CNY',
		rating: 5,
		productUrl:
			'http://ezinearticles.com/eros/suspendisse/accumsan/tortor.jsp?rutrum=rutrum&at=at&lorem=lorem&integer=integer&tincidunt=tincidunt&ante=ante&vel=vel&ipsum=ipsum&praesent=praesent&blandit=blandit&lacinia=lacinia&erat=erat&vestibulum=vestibulum&sed=sed&magna=magna&at=at&nunc=nunc&commodo=commodo&placerat=placerat&praesent=praesent&blandit=blandit&nam=nam&nulla=nulla&integer=integer&pede=pede&justo=justo&lacinia=lacinia&eget=eget&tincidunt=tincidunt&eget=eget&tempus=tempus&vel=vel&pede=pede&morbi=morbi&porttitor=porttitor&lorem=lorem&id=id&ligula=ligula&suspendisse=suspendisse&ornare=ornare&consequat=consequat&lectus=lectus&in=in&est=est&risus=risus&auctor=auctor&sed=sed&tristique=tristique&in=in&tempus=tempus&sit=sit&amet=amet&sem=sem&fusce=fusce&consequat=consequat&nulla=nulla&nisl=nisl&nunc=nunc&nisl=nisl&duis=duis&bibendum=bibendum&felis=felis&sed=sed&interdum=interdum&venenatis=venenatis&turpis=turpis&enim=enim&blandit=blandit&mi=mi&in=in&porttitor=porttitor&pede=pede&justo=justo&eu=eu&massa=massa&donec=donec&dapibus=dapibus&duis=duis&at=at&velit=velit&eu=eu&est=est&congue=congue',
	},
	{
		title: 'Rhynoodle',
		imgSrc: 'http://dummyimage.com/200x300.png/ff4444/ffffff',
		marketplace: 'walmart',
		price: '$653.34',
		currency: 'AZN',
		rating: 1,
		productUrl:
			'https://tiny.cc/dui/maecenas/tristique.json?nullam=augue&orci=a&pede=suscipit&venenatis=nulla&non=elit&sodales=ac&sed=nulla&tincidunt=sed&eu=vel&felis=enim&fusce=sit&posuere=amet&felis=nunc&sed=viverra&lacus=dapibus&morbi=nulla&sem=suscipit&mauris=ligula&laoreet=in&ut=lacus&rhoncus=curabitur&aliquet=at&pulvinar=ipsum&sed=ac&nisl=tellus&nunc=semper&rhoncus=interdum&dui=mauris&vel=ullamcorper&sem=purus',
	},
	{
		title: 'BlogXS',
		imgSrc: 'http://dummyimage.com/200x300.png/cc0000/ffffff',
		marketplace: 'etsy',
		price: '$449.56',
		currency: 'PYG',
		rating: 3,
		productUrl:
			'http://aboutads.info/sapien.html?habitasse=morbi&platea=a&dictumst=ipsum&morbi=integer&vestibulum=a&velit=nibh&id=in&pretium=quis&iaculis=justo&diam=maecenas&erat=rhoncus&fermentum=aliquam&justo=lacus&nec=morbi&condimentum=quis&neque=tortor&sapien=id&placerat=nulla&ante=ultrices&nulla=aliquet&justo=maecenas&aliquam=leo&quis=odio&turpis=condimentum&eget=id&elit=luctus&sodales=nec&scelerisque=molestie&mauris=sed&sit=justo&amet=pellentesque&eros=viverra&suspendisse=pede&accumsan=ac&tortor=diam&quis=cras&turpis=pellentesque&sed=volutpat&ante=dui&vivamus=maecenas&tortor=tristique&duis=est&mattis=et&egestas=tempus&metus=semper&aenean=est&fermentum=quam&donec=pharetra&ut=magna&mauris=ac&eget=consequat&massa=metus&tempor=sapien&convallis=ut&nulla=nunc&neque=vestibulum&libero=ante&convallis=ipsum&eget=primis&eleifend=in&luctus=faucibus&ultricies=orci&eu=luctus&nibh=et&quisque=ultrices&id=posuere&justo=cubilia&sit=curae&amet=mauris&sapien=viverra&dignissim=diam&vestibulum=vitae&vestibulum=quam&ante=suspendisse&ipsum=potenti&primis=nullam&in=porttitor&faucibus=lacus&orci=at&luctus=turpis&et=donec&ultrices=posuere&posuere=metus&cubilia=vitae&curae=ipsum&nulla=aliquam&dapibus=non&dolor=mauris&vel=morbi&est=non&donec=lectus&odio=aliquam&justo=sit',
	},
	{
		title: 'Kare',
		imgSrc: 'http://dummyimage.com/200x300.png/cc0000/ffffff',
		marketplace: 'amazon',
		price: '$791.50',
		currency: 'PGK',
		rating: 5,
		productUrl:
			'https://ezinearticles.com/purus/eu.xml?at=justo&vulputate=nec&vitae=condimentum&nisl=neque&aenean=sapien&lectus=placerat&pellentesque=ante&eget=nulla&nunc=justo&donec=aliquam&quis=quis&orci=turpis&eget=eget&orci=elit&vehicula=sodales&condimentum=scelerisque&curabitur=mauris&in=sit&libero=amet&ut=eros&massa=suspendisse&volutpat=accumsan&convallis=tortor&morbi=quis&odio=turpis&odio=sed&elementum=ante&eu=vivamus&interdum=tortor&eu=duis&tincidunt=mattis&in=egestas&leo=metus&maecenas=aenean',
	},
	{
		title: 'Blogtags',
		imgSrc: 'http://dummyimage.com/200x300.png/5fa2dd/ffffff',
		marketplace: 'etsy',
		price: '$187.22',
		currency: 'PHP',
		rating: 2,
		productUrl:
			'https://newsvine.com/primis/in/faucibus/orci/luctus/et/ultrices.xml?sapien=eu&cum=mi&sociis=nulla&natoque=ac&penatibus=enim&et=in&magnis=tempor&dis=turpis&parturient=nec&montes=euismod&nascetur=scelerisque&ridiculus=quam&mus=turpis&etiam=adipiscing&vel=lorem&augue=vitae&vestibulum=mattis&rutrum=nibh&rutrum=ligula&neque=nec&aenean=sem&auctor=duis&gravida=aliquam&sem=convallis&praesent=nunc&id=proin&massa=at&id=turpis&nisl=a&venenatis=pede&lacinia=posuere&aenean=nonummy&sit=integer&amet=non&justo=velit&morbi=donec&ut=diam&odio=neque&cras=vestibulum&mi=eget&pede=vulputate&malesuada=ut&in=ultrices',
	},
	{
		title: 'Avavee',
		imgSrc: 'http://dummyimage.com/200x300.png/5fa2dd/ffffff',
		marketplace: 'etsy',
		price: '$47.24',
		currency: 'CNY',
		rating: 1,
		productUrl:
			'https://berkeley.edu/curabitur.html?morbi=at&odio=velit&odio=eu&elementum=est&eu=congue&interdum=elementum&eu=in&tincidunt=hac&in=habitasse&leo=platea&maecenas=dictumst&pulvinar=morbi&lobortis=vestibulum&est=velit&phasellus=id&sit=pretium',
	},
	{
		title: 'Jetwire',
		imgSrc: 'http://dummyimage.com/200x300.png/ff4444/ffffff',
		marketplace: 'amazon',
		price: '$662.92',
		currency: 'CNY',
		rating: 4,
		productUrl:
			'https://bandcamp.com/consectetuer/adipiscing/elit/proin/risus.jsp?vivamus=neque&metus=sapien&arcu=placerat&adipiscing=ante&molestie=nulla&hendrerit=justo&at=aliquam&vulputate=quis&vitae=turpis&nisl=eget&aenean=elit&lectus=sodales&pellentesque=scelerisque&eget=mauris&nunc=sit&donec=amet&quis=eros&orci=suspendisse&eget=accumsan&orci=tortor&vehicula=quis&condimentum=turpis&curabitur=sed&in=ante&libero=vivamus&ut=tortor&massa=duis&volutpat=mattis&convallis=egestas&morbi=metus&odio=aenean&odio=fermentum&elementum=donec&eu=ut&interdum=mauris&eu=eget&tincidunt=massa&in=tempor&leo=convallis&maecenas=nulla&pulvinar=neque&lobortis=libero&est=convallis&phasellus=eget&sit=eleifend&amet=luctus&erat=ultricies&nulla=eu&tempus=nibh&vivamus=quisque&in=id&felis=justo&eu=sit&sapien=amet&cursus=sapien&vestibulum=dignissim&proin=vestibulum&eu=vestibulum&mi=ante&nulla=ipsum&ac=primis&enim=in&in=faucibus&tempor=orci&turpis=luctus&nec=et&euismod=ultrices&scelerisque=posuere&quam=cubilia&turpis=curae&adipiscing=nulla&lorem=dapibus&vitae=dolor&mattis=vel&nibh=est&ligula=donec&nec=odio&sem=justo&duis=sollicitudin&aliquam=ut',
	},
	{
		title: 'Innojam',
		imgSrc: 'http://dummyimage.com/200x300.png/cc0000/ffffff',
		marketplace: 'etsy',
		price: '$710.91',
		currency: 'XOF',
		rating: 3,
		productUrl:
			'https://sun.com/suspendisse/ornare/consequat/lectus/in/est.json?platea=elementum&dictumst=eu&aliquam=interdum&augue=eu&quam=tincidunt&sollicitudin=in&vitae=leo&consectetuer=maecenas&eget=pulvinar&rutrum=lobortis&at=est&lorem=phasellus&integer=sit&tincidunt=amet&ante=erat',
	},
	{
		title: 'Realbuzz',
		imgSrc: 'http://dummyimage.com/200x300.png/ff4444/ffffff',
		marketplace: 'amazon',
		price: '$408.51',
		currency: 'EUR',
		rating: 3,
		productUrl:
			'http://deviantart.com/duis/aliquam/convallis/nunc/proin.aspx?nunc=nisi&rhoncus=venenatis&dui=tristique&vel=fusce&sem=congue&sed=diam&sagittis=id&nam=ornare&congue=imperdiet&risus=sapien&semper=urna&porta=pretium&volutpat=nisl&quam=ut&pede=volutpat&lobortis=sapien&ligula=arcu&sit=sed',
	},
	{
		title: 'Linklinks',
		imgSrc: 'http://dummyimage.com/200x300.png/dddddd/000000',
		marketplace: 'amazon',
		price: '$191.94',
		currency: 'SEK',
		rating: 5,
		productUrl:
			'http://google.cn/semper/rutrum.png?quam=imperdiet&pede=sapien&lobortis=urna&ligula=pretium&sit=nisl&amet=ut&eleifend=volutpat&pede=sapien&libero=arcu&quis=sed&orci=augue&nullam=aliquam&molestie=erat&nibh=volutpat&in=in&lectus=congue&pellentesque=etiam&at=justo&nulla=etiam&suspendisse=pretium&potenti=iaculis&cras=justo&in=in&purus=hac&eu=habitasse&magna=platea',
	},
	{
		title: 'Dabshots',
		imgSrc: 'http://dummyimage.com/200x300.png/ff4444/ffffff',
		marketplace: 'etsy',
		price: '$992.61',
		currency: 'DOP',
		rating: 3,
		productUrl:
			'https://prlog.org/suspendisse.js?nisl=pretium&duis=iaculis&ac=diam&nibh=erat&fusce=fermentum&lacus=justo&purus=nec&aliquet=condimentum&at=neque&feugiat=sapien&non=placerat&pretium=ante&quis=nulla&lectus=justo&suspendisse=aliquam&potenti=quis&in=turpis&eleifend=eget&quam=elit&a=sodales&odio=scelerisque&in=mauris&hac=sit&habitasse=amet&platea=eros&dictumst=suspendisse&maecenas=accumsan&ut=tortor&massa=quis&quis=turpis&augue=sed&luctus=ante&tincidunt=vivamus&nulla=tortor&mollis=duis&molestie=mattis&lorem=egestas&quisque=metus&ut=aenean&erat=fermentum&curabitur=donec&gravida=ut&nisi=mauris&at=eget&nibh=massa&in=tempor&hac=convallis&habitasse=nulla&platea=neque',
	},
	{
		title: 'Vinte',
		imgSrc: 'http://dummyimage.com/200x300.png/ff4444/ffffff',
		marketplace: 'walmart',
		price: '$560.12',
		currency: 'MNT',
		rating: 3,
		productUrl:
			'https://indiegogo.com/habitasse/platea/dictumst.jpg?sit=nisi&amet=volutpat&lobortis=eleifend&sapien=donec&sapien=ut&non=dolor&mi=morbi&integer=vel&ac=lectus&neque=in&duis=quam&bibendum=fringilla&morbi=rhoncus&non=mauris',
	},
	{
		title: 'Eayo',
		imgSrc: 'http://dummyimage.com/200x300.png/dddddd/000000',
		marketplace: 'etsy',
		price: '$496.87',
		currency: 'TZS',
		rating: 3,
		productUrl:
			'http://mozilla.org/enim/leo/rhoncus.jsp?dolor=posuere&sit=cubilia&amet=curae&consectetuer=duis&adipiscing=faucibus&elit=accumsan&proin=odio&risus=curabitur&praesent=convallis&lectus=duis&vestibulum=consequat&quam=dui&sapien=nec&varius=nisi&ut=volutpat&blandit=eleifend&non=donec&interdum=ut&in=dolor&ante=morbi&vestibulum=vel&ante=lectus&ipsum=in&primis=quam&in=fringilla&faucibus=rhoncus&orci=mauris&luctus=enim&et=leo&ultrices=rhoncus&posuere=sed&cubilia=vestibulum&curae=sit&duis=amet&faucibus=cursus&accumsan=id&odio=turpis&curabitur=integer&convallis=aliquet&duis=massa&consequat=id&dui=lobortis&nec=convallis&nisi=tortor&volutpat=risus&eleifend=dapibus&donec=augue&ut=vel&dolor=accumsan&morbi=tellus&vel=nisi&lectus=eu&in=orci&quam=mauris&fringilla=lacinia&rhoncus=sapien&mauris=quis&enim=libero&leo=nullam&rhoncus=sit&sed=amet&vestibulum=turpis&sit=elementum&amet=ligula&cursus=vehicula&id=consequat&turpis=morbi&integer=a&aliquet=ipsum&massa=integer&id=a&lobortis=nibh&convallis=in&tortor=quis&risus=justo&dapibus=maecenas&augue=rhoncus&vel=aliquam&accumsan=lacus&tellus=morbi&nisi=quis&eu=tortor&orci=id&mauris=nulla&lacinia=ultrices&sapien=aliquet&quis=maecenas&libero=leo&nullam=odio',
	},
	{
		title: 'Dabshots',
		imgSrc: 'http://dummyimage.com/200x300.png/cc0000/ffffff',
		marketplace: 'ebay',
		price: '$418.05',
		currency: 'CRC',
		rating: 3,
		productUrl:
			'https://phpbb.com/est/quam/pharetra/magna/ac/consequat.aspx?vitae=sapien&nisl=sapien&aenean=non&lectus=mi&pellentesque=integer&eget=ac&nunc=neque&donec=duis&quis=bibendum&orci=morbi&eget=non&orci=quam&vehicula=nec&condimentum=dui&curabitur=luctus&in=rutrum&libero=nulla&ut=tellus&massa=in&volutpat=sagittis&convallis=dui&morbi=vel&odio=nisl&odio=duis&elementum=ac&eu=nibh&interdum=fusce&eu=lacus&tincidunt=purus&in=aliquet&leo=at&maecenas=feugiat&pulvinar=non&lobortis=pretium&est=quis&phasellus=lectus&sit=suspendisse&amet=potenti&erat=in&nulla=eleifend&tempus=quam&vivamus=a&in=odio&felis=in&eu=hac&sapien=habitasse&cursus=platea&vestibulum=dictumst&proin=maecenas&eu=ut&mi=massa&nulla=quis&ac=augue&enim=luctus&in=tincidunt&tempor=nulla&turpis=mollis&nec=molestie&euismod=lorem&scelerisque=quisque&quam=ut&turpis=erat&adipiscing=curabitur&lorem=gravida&vitae=nisi&mattis=at&nibh=nibh&ligula=in&nec=hac&sem=habitasse&duis=platea&aliquam=dictumst&convallis=aliquam&nunc=augue&proin=quam&at=sollicitudin&turpis=vitae&a=consectetuer&pede=eget&posuere=rutrum&nonummy=at&integer=lorem&non=integer&velit=tincidunt&donec=ante&diam=vel&neque=ipsum&vestibulum=praesent&eget=blandit&vulputate=lacinia&ut=erat&ultrices=vestibulum&vel=sed&augue=magna',
	},
	{
		title: 'Pixonyx',
		imgSrc: 'http://dummyimage.com/200x300.png/dddddd/000000',
		marketplace: 'amazon',
		price: '$878.40',
		currency: 'ILS',
		rating: 3,
		productUrl:
			'https://infoseek.co.jp/posuere/cubilia/curae/duis/faucibus/accumsan/odio.jsp?tempor=orci&convallis=luctus&nulla=et&neque=ultrices&libero=posuere&convallis=cubilia&eget=curae&eleifend=mauris&luctus=viverra&ultricies=diam&eu=vitae&nibh=quam&quisque=suspendisse&id=potenti&justo=nullam&sit=porttitor&amet=lacus&sapien=at&dignissim=turpis&vestibulum=donec&vestibulum=posuere&ante=metus&ipsum=vitae&primis=ipsum&in=aliquam&faucibus=non&orci=mauris&luctus=morbi&et=non&ultrices=lectus&posuere=aliquam&cubilia=sit&curae=amet&nulla=diam&dapibus=in&dolor=magna&vel=bibendum&est=imperdiet&donec=nullam&odio=orci&justo=pede&sollicitudin=venenatis&ut=non&suscipit=sodales&a=sed&feugiat=tincidunt&et=eu&eros=felis&vestibulum=fusce&ac=posuere&est=felis&lacinia=sed&nisi=lacus&venenatis=morbi&tristique=sem&fusce=mauris&congue=laoreet&diam=ut&id=rhoncus&ornare=aliquet&imperdiet=pulvinar&sapien=sed&urna=nisl&pretium=nunc&nisl=rhoncus&ut=dui&volutpat=vel&sapien=sem&arcu=sed&sed=sagittis&augue=nam&aliquam=congue&erat=risus&volutpat=semper&in=porta&congue=volutpat&etiam=quam&justo=pede&etiam=lobortis&pretium=ligula&iaculis=sit&justo=amet&in=eleifend&hac=pede&habitasse=libero&platea=quis&dictumst=orci&etiam=nullam&faucibus=molestie&cursus=nibh&urna=in&ut=lectus&tellus=pellentesque&nulla=at&ut=nulla&erat=suspendisse&id=potenti&mauris=cras&vulputate=in',
	},
	{
		title: 'Trilith',
		imgSrc: 'http://dummyimage.com/200x300.png/5fa2dd/ffffff',
		marketplace: 'walmart',
		price: '$247.96',
		currency: 'BRL',
		rating: 1,
		productUrl:
			'http://ihg.com/nam/congue/risus/semper/porta.html?hendrerit=lobortis&at=convallis&vulputate=tortor&vitae=risus&nisl=dapibus&aenean=augue&lectus=vel&pellentesque=accumsan&eget=tellus&nunc=nisi&donec=eu&quis=orci&orci=mauris&eget=lacinia&orci=sapien&vehicula=quis&condimentum=libero&curabitur=nullam&in=sit&libero=amet&ut=turpis&massa=elementum&volutpat=ligula&convallis=vehicula&morbi=consequat&odio=morbi&odio=a&elementum=ipsum&eu=integer&interdum=a&eu=nibh&tincidunt=in&in=quis&leo=justo&maecenas=maecenas&pulvinar=rhoncus&lobortis=aliquam&est=lacus&phasellus=morbi&sit=quis&amet=tortor&erat=id&nulla=nulla&tempus=ultrices&vivamus=aliquet&in=maecenas&felis=leo&eu=odio&sapien=condimentum&cursus=id&vestibulum=luctus&proin=nec&eu=molestie&mi=sed&nulla=justo&ac=pellentesque&enim=viverra&in=pede&tempor=ac&turpis=diam&nec=cras&euismod=pellentesque&scelerisque=volutpat&quam=dui&turpis=maecenas&adipiscing=tristique&lorem=est&vitae=et&mattis=tempus&nibh=semper&ligula=est&nec=quam&sem=pharetra&duis=magna&aliquam=ac&convallis=consequat&nunc=metus',
	},
	{
		title: 'Jaxbean',
		imgSrc: 'http://dummyimage.com/200x300.png/ff4444/ffffff',
		marketplace: 'walmart',
		price: '$349.89',
		currency: 'PLN',
		rating: 1,
		productUrl:
			'http://tripadvisor.com/quisque/ut/erat/curabitur/gravida/nisi.jpg?pede=suspendisse&ac=accumsan&diam=tortor&cras=quis&pellentesque=turpis&volutpat=sed&dui=ante&maecenas=vivamus&tristique=tortor&est=duis&et=mattis&tempus=egestas&semper=metus&est=aenean&quam=fermentum&pharetra=donec&magna=ut&ac=mauris&consequat=eget&metus=massa&sapien=tempor&ut=convallis&nunc=nulla&vestibulum=neque&ante=libero&ipsum=convallis&primis=eget&in=eleifend&faucibus=luctus&orci=ultricies&luctus=eu&et=nibh&ultrices=quisque&posuere=id&cubilia=justo&curae=sit&mauris=amet&viverra=sapien&diam=dignissim&vitae=vestibulum&quam=vestibulum&suspendisse=ante&potenti=ipsum&nullam=primis&porttitor=in&lacus=faucibus',
	},
	{
		title: 'Jayo',
		imgSrc: 'http://dummyimage.com/200x300.png/cc0000/ffffff',
		marketplace: 'amazon',
		price: '$245.99',
		currency: 'CNY',
		rating: 1,
		productUrl:
			'https://blogs.com/quisque/porta/volutpat/erat.aspx?odio=sapien&porttitor=in&id=sapien&consequat=iaculis&in=congue&consequat=vivamus&ut=metus&nulla=arcu&sed=adipiscing&accumsan=molestie&felis=hendrerit&ut=at&at=vulputate&dolor=vitae&quis=nisl&odio=aenean&consequat=lectus&varius=pellentesque&integer=eget&ac=nunc&leo=donec&pellentesque=quis',
	},
	{
		title: 'Thoughtsphere',
		imgSrc: 'http://dummyimage.com/200x300.png/cc0000/ffffff',
		marketplace: 'ebay',
		price: '$236.12',
		currency: 'RUB',
		rating: 3,
		productUrl:
			'http://bravesites.com/vivamus/metus/arcu/adipiscing/molestie.jsp?nulla=suspendisse&sed=accumsan&vel=tortor&enim=quis&sit=turpis',
	},
	{
		title: 'Voomm',
		imgSrc: 'http://dummyimage.com/200x300.png/dddddd/000000',
		marketplace: 'etsy',
		price: '$139.61',
		currency: 'USD',
		rating: 4,
		productUrl:
			'https://usatoday.com/posuere/cubilia/curae/nulla/dapibus.xml?quam=ipsum&sollicitudin=primis&vitae=in&consectetuer=faucibus&eget=orci&rutrum=luctus&at=et&lorem=ultrices&integer=posuere&tincidunt=cubilia&ante=curae&vel=nulla&ipsum=dapibus&praesent=dolor&blandit=vel&lacinia=est&erat=donec&vestibulum=odio&sed=justo&magna=sollicitudin&at=ut&nunc=suscipit&commodo=a&placerat=feugiat&praesent=et&blandit=eros&nam=vestibulum&nulla=ac&integer=est&pede=lacinia&justo=nisi&lacinia=venenatis&eget=tristique&tincidunt=fusce&eget=congue&tempus=diam&vel=id&pede=ornare&morbi=imperdiet&porttitor=sapien&lorem=urna&id=pretium&ligula=nisl&suspendisse=ut&ornare=volutpat&consequat=sapien&lectus=arcu&in=sed&est=augue&risus=aliquam&auctor=erat&sed=volutpat&tristique=in&in=congue&tempus=etiam&sit=justo&amet=etiam&sem=pretium&fusce=iaculis&consequat=justo&nulla=in&nisl=hac&nunc=habitasse&nisl=platea&duis=dictumst&bibendum=etiam&felis=faucibus&sed=cursus&interdum=urna&venenatis=ut&turpis=tellus&enim=nulla&blandit=ut&mi=erat',
	},
];
