/**
 * Geostick Fun Facts
 * Displayed during loading to educate users about Geostick's achievements
 */

export type Language = 'nl' | 'en' | 'de' | 'fr' | 'es' | 'it' | 'pl' | 'tr' | 'ar' | 'zh' | 'pt' | 'ro';

export type FactCategory = 'technology' | 'sustainability' | 'social';

export interface GeostickFact {
  id: string;
  category: FactCategory;
  text: Record<Language, string>;
}

export const geostickFacts: GeostickFact[] = [
  // ========================================
  // TECHNOLOGY FACTS
  // ========================================
  {
    id: 'tech-1',
    category: 'technology',
    text: {
      nl: 'In 2024 werd een nieuwe Nilpeter-drukpers geplaatst met energiezuinige LED-droging, goed voor 50% minder energieverbruik.',
      en: 'In 2024, a new Nilpeter printing press with energy-efficient LED drying was installed, achieving 50% less energy consumption.',
      de: 'Im Jahr 2024 wurde eine neue Nilpeter-Druckmaschine mit energieeffizienter LED-Trocknung installiert, die 50 % weniger Energie verbraucht.',
      fr: 'En 2024, une nouvelle presse Nilpeter avec séchage LED économe en énergie a été installée, réduisant la consommation d\'énergie de 50 %.',
      es: 'En 2024 se instaló una nueva prensa Nilpeter con secado LED de bajo consumo, logrando un 50% menos de consumo energético.',
      it: 'Nel 2024 è stata installata una nuova pressa Nilpeter con asciugatura LED a basso consumo energetico, riducendo i consumi del 50%.',
      pl: 'W 2024 roku zainstalowano nową prasę Nilpeter z energooszczędnym suszeniem LED, co pozwala na 50% mniejsze zużycie energii.',
      tr: '2024 yılında enerji tasarruflu LED kurutmalı yeni bir Nilpeter baskı makinesi kuruldu ve %50 daha az enerji tüketimi sağlandı.',
      ar: 'في عام 2024، تم تركيب مطبعة Nilpeter جديدة بتجفيف LED موفر للطاقة، مما حقق انخفاضًا بنسبة 50% في استهلاك الطاقة.',
      zh: '2024年，安装了一台配备节能LED干燥的新型Nilpeter印刷机，实现了50%的能源节约。',
      pt: 'Em 2024, foi instalada uma nova prensa Nilpeter com secagem LED eficiente em energia, reduzindo o consumo em 50%.',
      ro: 'În 2024 a fost instalată o nouă presă Nilpeter cu uscare LED eficientă energetic, reducând consumul cu 50%.'
    }
  },
  {
    id: 'tech-2',
    category: 'technology',
    text: {
      nl: 'Er werden drie Butt Splicers geïnstalleerd die automatisch rolwisselen – dit vermindert afval en verhoogt efficiëntie.',
      en: 'Three Butt Splicers were installed that automatically switch rolls – reducing waste and increasing efficiency.',
      de: 'Es wurden drei Butt Splicers installiert, die automatisch Rollen wechseln – das reduziert Abfall und steigert die Effizienz.',
      fr: 'Trois Butt Splicers ont été installés pour changer automatiquement les rouleaux – réduisant les déchets et augmentant l\'efficacité.',
      es: 'Se instalaron tres Butt Splicers que cambian rollos automáticamente, reduciendo desperdicios y aumentando la eficiencia.',
      it: 'Sono stati installati tre Butt Splicer che cambiano automaticamente i rulli, riducendo gli sprechi e aumentando l\'efficienza.',
      pl: 'Zainstalowano trzy Butt Splicers, które automatycznie zmieniają rolki – redukując odpady i zwiększając efektywność.',
      tr: 'Otomatik olarak rulo değiştiren üç Butt Splicer kuruldu – bu da israfı azaltıyor ve verimliliği artırıyor.',
      ar: 'تم تركيب ثلاثة أجهزة Butt Splicers التي تبديل اللفات تلقائيًا – مما يقلل الهدر ويزيد الكفاءة.',
      zh: '安装了三台自动换卷的Butt Splicers——减少浪费并提高效率。',
      pt: 'Três Butt Splicers foram instalados para trocar rolos automaticamente – reduzindo desperdício e aumentando eficiência.',
      ro: 'Au fost instalate trei Butt Splicers care schimbă automat rulouri – reducând deșeurile și crescând eficiența.'
    }
  },
  {
    id: 'tech-3',
    category: 'technology',
    text: {
      nl: 'In totaal beschikt Geostick over 12 drukpersen, 9 HP Indigo-persmachines, 11 blanco machines, en 2 wikkel- en inspectiemachines.',
      en: 'In total, Geostick has 12 printing presses, 9 HP Indigo presses, 11 blank machines, and 2 winding and inspection machines.',
      de: 'Insgesamt verfügt Geostick über 12 Druckmaschinen, 9 HP Indigo-Pressen, 11 Leermaschinen und 2 Wickel- und Inspektionsmaschinen.',
      fr: 'Au total, Geostick dispose de 12 presses à imprimer, 9 presses HP Indigo, 11 machines vierges et 2 machines d\'enroulement et d\'inspection.',
      es: 'En total, Geostick cuenta con 12 prensas de impresión, 9 prensas HP Indigo, 11 máquinas en blanco y 2 máquinas de bobinado e inspección.',
      it: 'In totale, Geostick dispone di 12 presse da stampa, 9 presse HP Indigo, 11 macchine bianche e 2 macchine di avvolgimento e ispezione.',
      pl: 'W sumie Geostick posiada 12 maszyn drukarskich, 9 pras HP Indigo, 11 maszyn do papieru czystego oraz 2 maszyny do nawijania i inspekcji.',
      tr: 'Toplamda Geostick\'in 12 baskı makinesi, 9 HP Indigo presi, 11 boş makine ve 2 sarma ve muayene makinesi bulunmaktadır.',
      ar: 'إجمالاً، تمتلك Geostick 12 مطبعة، 9 مطابع HP Indigo، 11 آلة فارغة، وآلتي لف وفحص.',
      zh: 'Geostick总共拥有12台印刷机、9台HP Indigo印刷机、11台空白机器和2台卷绕检查机。',
      pt: 'No total, a Geostick possui 12 prensas de impressão, 9 prensas HP Indigo, 11 máquinas em branco e 2 máquinas de enrolamento e inspeção.',
      ro: 'În total, Geostick deține 12 prese de tipar, 9 prese HP Indigo, 11 mașini albe și 2 mașini de înfășurare și inspecție.'
    }
  },
  {
    id: 'tech-4',
    category: 'technology',
    text: {
      nl: 'Het bedrijf gebruikt 3.214 zonnepanelen en wekte in 2024 963.581 kWh groene stroom op.',
      en: 'The company uses 3,214 solar panels and generated 963,581 kWh of green electricity in 2024.',
      de: 'Das Unternehmen nutzt 3.214 Solarpaneele und erzeugte 2024 963.581 kWh grünen Strom.',
      fr: 'L\'entreprise utilise 3 214 panneaux solaires et a produit 963 581 kWh d\'électricité verte en 2024.',
      es: 'La empresa utiliza 3.214 paneles solares y generó 963.581 kWh de electricidad verde en 2024.',
      it: 'L\'azienda utilizza 3.214 pannelli solari e ha generato 963.581 kWh di energia verde nel 2024.',
      pl: 'Firma korzysta z 3.214 paneli słonecznych i wyprodukowała 963.581 kWh zielonej energii w 2024 roku.',
      tr: 'Şirket 3.214 güneş paneli kullanmakta ve 2024\'te 963.581 kWh yeşil enerji üretti.',
      ar: 'تستخدم الشركة 3,214 لوحة شمسية وأنتجت 963,581 كيلوواط ساعة من الكهرباء الخضراء في عام 2024.',
      zh: '公司使用3,214块太阳能电池板，2024年产生了963,581千瓦时的绿色电力。',
      pt: 'A empresa usa 3.214 painéis solares e gerou 963.581 kWh de eletricidade verde em 2024.',
      ro: 'Compania folosește 3.214 panouri solare și a generat 963.581 kWh de energie verde în 2024.'
    }
  },
  {
    id: 'tech-5',
    category: 'technology',
    text: {
      nl: 'Ongeveer 22% van de totale energie kwam in 2024 uit zonne-energie.',
      en: 'Approximately 22% of total energy came from solar power in 2024.',
      de: 'Etwa 22 % der Gesamtenergie stammte 2024 aus Solarenergie.',
      fr: 'Environ 22 % de l\'énergie totale provenait de l\'énergie solaire en 2024.',
      es: 'Aproximadamente el 22% de la energía total provino de energía solar en 2024.',
      it: 'Circa il 22% dell\'energia totale proveniva dall\'energia solare nel 2024.',
      pl: 'Około 22% całkowitej energii pochodziło z energii słonecznej w 2024 roku.',
      tr: '2024\'te toplam enerjinin yaklaşık %22\'si güneş enerjisinden geldi.',
      ar: 'جاء حوالي 22% من إجمالي الطاقة من الطاقة الشمسية في عام 2024.',
      zh: '2024年，总能源的约22%来自太阳能。',
      pt: 'Aproximadamente 22% da energia total veio de energia solar em 2024.',
      ro: 'Aproximativ 22% din energia totală a provenit din energia solară în 2024.'
    }
  },
  {
    id: 'tech-6',
    category: 'technology',
    text: {
      nl: 'Geostick installeerde slimme meters om stroompieken te spreiden en netcongestie te verminderen.',
      en: 'Geostick installed smart meters to spread electricity peaks and reduce grid congestion.',
      de: 'Geostick installierte intelligente Zähler, um Stromspitzen zu verteilen und Netzüberlastung zu reduzieren.',
      fr: 'Geostick a installé des compteurs intelligents pour répartir les pics d\'électricité et réduire la congestion du réseau.',
      es: 'Geostick instaló medidores inteligentes para distribuir picos de electricidad y reducir la congestión de la red.',
      it: 'Geostick ha installato contatori intelligenti per distribuire i picchi elettrici e ridurre la congestione della rete.',
      pl: 'Geostick zainstalował inteligentne liczniki, aby rozłożyć szczyty energetyczne i zmniejszyć przeciążenie sieci.',
      tr: 'Geostick, elektrik zirvelerini yaymak ve şebeke tıkanıklığını azaltmak için akıllı sayaçlar kurdu.',
      ar: 'قامت Geostick بتركيب عدادات ذكية لتوزيع ذروة الكهرباء وتقليل ازدحام الشبكة.',
      zh: 'Geostick安装了智能电表以分散电力高峰并减少电网拥堵。',
      pt: 'A Geostick instalou medidores inteligentes para distribuir picos de eletricidade e reduzir o congestionamento da rede.',
      ro: 'Geostick a instalat contoare inteligente pentru a distribui vârfurile de energie și a reduce congestia rețelei.'
    }
  },

  // ========================================
  // SUSTAINABILITY FACTS
  // ========================================
  {
    id: 'sust-1',
    category: 'sustainability',
    text: {
      nl: 'In 2024 veroorzaakte Geostick\'s volledige keten ongeveer 165 miljoen kg CO₂-uitstoot (voornamelijk Scope 3).',
      en: 'In 2024, Geostick\'s full chain caused approximately 165 million kg of CO₂ emissions (mainly Scope 3).',
      de: 'Im Jahr 2024 verursachte die gesamte Kette von Geostick etwa 165 Millionen kg CO₂-Emissionen (hauptsächlich Scope 3).',
      fr: 'En 2024, la chaîne complète de Geostick a causé environ 165 millions de kg d\'émissions de CO₂ (principalement Scope 3).',
      es: 'En 2024, la cadena completa de Geostick causó aproximadamente 165 millones de kg de emisiones de CO₂ (principalmente Scope 3).',
      it: 'Nel 2024, l\'intera catena di Geostick ha causato circa 165 milioni di kg di emissioni di CO₂ (principalmente Scope 3).',
      pl: 'W 2024 roku cały łańcuch Geostick spowodował około 165 milionów kg emisji CO₂ (głównie Scope 3).',
      tr: '2024\'te Geostick\'in tüm zinciri yaklaşık 165 milyon kg CO₂ emisyonuna neden oldu (çoğunlukla Scope 3).',
      ar: 'في عام 2024، تسببت سلسلة Geostick الكاملة في حوالي 165 مليون كجم من انبعاثات ثاني أكسيد الكربون (معظمها Scope 3).',
      zh: '2024年，Geostick的整个供应链造成了约1.65亿公斤的二氧化碳排放（主要是范围3）。',
      pt: 'Em 2024, a cadeia completa da Geostick causou aproximadamente 165 milhões de kg de emissões de CO₂ (principalmente Scope 3).',
      ro: 'În 2024, întregul lanț Geostick a cauzat aproximativ 165 milioane kg de emisii de CO₂ (în principal Scope 3).'
    }
  },
  {
    id: 'sust-2',
    category: 'sustainability',
    text: {
      nl: '99,8% van het papier dat Geostick gebruikt is FSC-gecertificeerd.',
      en: '99.8% of the paper used by Geostick is FSC-certified.',
      de: '99,8 % des von Geostick verwendeten Papiers ist FSC-zertifiziert.',
      fr: '99,8 % du papier utilisé par Geostick est certifié FSC.',
      es: 'El 99,8% del papel utilizado por Geostick está certificado FSC.',
      it: 'Il 99,8% della carta utilizzata da Geostick è certificata FSC.',
      pl: '99,8% papieru używanego przez Geostick jest certyfikowane FSC.',
      tr: 'Geostick tarafından kullanılan kağıdın %99,8\'i FSC sertifikalıdır.',
      ar: '99.8% من الورق الذي تستخدمه Geostick حاصل على شهادة FSC.',
      zh: 'Geostick使用的纸张99.8%获得FSC认证。',
      pt: '99,8% do papel usado pela Geostick é certificado FSC.',
      ro: '99,8% din hârtia utilizată de Geostick este certificată FSC.'
    }
  },
  {
    id: 'sust-3',
    category: 'sustainability',
    text: {
      nl: 'Het bedrijf heeft een eigen recyclingprogramma: Geostick Return, waarmee in 2024 82.500 kg rugpapier werd ingezameld.',
      en: 'The company has its own recycling program: Geostick Return, which collected 82,500 kg of liner paper in 2024.',
      de: 'Das Unternehmen hat ein eigenes Recyclingprogramm: Geostick Return, das 2024 82.500 kg Trägerpapier sammelte.',
      fr: 'L\'entreprise a son propre programme de recyclage : Geostick Return, qui a collecté 82 500 kg de papier support en 2024.',
      es: 'La empresa tiene su propio programa de reciclaje: Geostick Return, que recolectó 82.500 kg de papel liner en 2024.',
      it: 'L\'azienda ha il proprio programma di riciclaggio: Geostick Return, che ha raccolto 82.500 kg di carta supporto nel 2024.',
      pl: 'Firma ma własny program recyklingu: Geostick Return, który zebrał 82.500 kg papieru nośnego w 2024 roku.',
      tr: 'Şirketin kendi geri dönüşüm programı var: Geostick Return, 2024\'te 82.500 kg destek kağıdı topladı.',
      ar: 'لدى الشركة برنامج إعادة تدوير خاص بها: Geostick Return، والذي جمع 82,500 كجم من ورق البطانة في عام 2024.',
      zh: '公司拥有自己的回收计划：Geostick Return，2024年收集了82,500公斤的底纸。',
      pt: 'A empresa tem seu próprio programa de reciclagem: Geostick Return, que coletou 82.500 kg de papel liner em 2024.',
      ro: 'Compania are propriul program de reciclare: Geostick Return, care a colectat 82.500 kg de hârtie de suport în 2024.'
    }
  },
  {
    id: 'sust-4',
    category: 'sustainability',
    text: {
      nl: 'Dat leverde 150 ton CO₂-besparing op voor klanten.',
      en: 'This resulted in 150 tons of CO₂ savings for customers.',
      de: 'Das führte zu einer CO₂-Einsparung von 150 Tonnen für Kunden.',
      fr: 'Cela a permis une économie de 150 tonnes de CO₂ pour les clients.',
      es: 'Esto resultó en un ahorro de 150 toneladas de CO₂ para los clientes.',
      it: 'Ciò ha comportato un risparmio di 150 tonnellate di CO₂ per i clienti.',
      pl: 'To przyniosło oszczędność 150 ton CO₂ dla klientów.',
      tr: 'Bu, müşteriler için 150 ton CO₂ tasarrufu sağladı.',
      ar: 'أدى هذا إلى توفير 150 طنًا من ثاني أكسيد الكربون للعملاء.',
      zh: '这为客户节省了150吨二氧化碳。',
      pt: 'Isso resultou em economia de 150 toneladas de CO₂ para os clientes.',
      ro: 'Acest lucru a dus la o economie de 150 de tone de CO₂ pentru clienți.'
    }
  },
  {
    id: 'sust-5',
    category: 'sustainability',
    text: {
      nl: 'Samen met Modexpress bouwt Geostick aan circulaire logistiek.',
      en: 'Together with Modexpress, Geostick is building circular logistics.',
      de: 'Zusammen mit Modexpress baut Geostick an einer Kreislauflogistik.',
      fr: 'Avec Modexpress, Geostick construit une logistique circulaire.',
      es: 'Junto con Modexpress, Geostick está construyendo logística circular.',
      it: 'Insieme a Modexpress, Geostick sta costruendo una logistica circolare.',
      pl: 'Razem z Modexpress, Geostick buduje logistykę o obiegu zamkniętym.',
      tr: 'Modexpress ile birlikte Geostick, döngüsel lojistik inşa ediyor.',
      ar: 'بالتعاون مع Modexpress، تبني Geostick لوجستيات دائرية.',
      zh: 'Geostick与Modexpress合作建立循环物流。',
      pt: 'Junto com a Modexpress, a Geostick está construindo logística circular.',
      ro: 'Împreună cu Modexpress, Geostick construiește logistică circulară.'
    }
  },
  {
    id: 'sust-6',
    category: 'sustainability',
    text: {
      nl: 'In totaal werd in 2024 11,2 miljoen kg afval geregistreerd, waarvan het grootste deel papier en karton.',
      en: 'In total, 11.2 million kg of waste was registered in 2024, most of which was paper and cardboard.',
      de: 'Insgesamt wurden 2024 11,2 Millionen kg Abfall registriert, wovon der Großteil Papier und Karton war.',
      fr: 'Au total, 11,2 millions de kg de déchets ont été enregistrés en 2024, dont la majeure partie était du papier et du carton.',
      es: 'En total se registraron 11,2 millones de kg de residuos en 2024, la mayoría papel y cartón.',
      it: 'In totale sono stati registrati 11,2 milioni di kg di rifiuti nel 2024, la maggior parte dei quali carta e cartone.',
      pl: 'W sumie zarejestrowano 11,2 miliona kg odpadów w 2024 roku, z czego większość to papier i tektura.',
      tr: '2024\'te toplam 11,2 milyon kg atık kaydedildi, bunun çoğu kağıt ve kartondu.',
      ar: 'تم تسجيل إجمالي 11.2 مليون كجم من النفايات في عام 2024، معظمها ورق وكرتون.',
      zh: '2024年共登记了1120万公斤废物，其中大部分是纸张和纸板。',
      pt: 'No total, foram registrados 11,2 milhões de kg de resíduos em 2024, a maioria papel e papelão.',
      ro: 'În total au fost înregistrate 11,2 milioane kg de deșeuri în 2024, majoritatea hârtie și carton.'
    }
  },
  {
    id: 'sust-7',
    category: 'sustainability',
    text: {
      nl: 'Geostick gebruikt sinds 2024 veiligere, symboolvrije schoonmaakmiddelen zonder schadelijke stoffen.',
      en: 'Since 2024, Geostick uses safer, symbol-free cleaning agents without harmful substances.',
      de: 'Seit 2024 verwendet Geostick sicherere, symbolfreie Reinigungsmittel ohne schädliche Stoffe.',
      fr: 'Depuis 2024, Geostick utilise des produits de nettoyage plus sûrs, sans symboles et sans substances nocives.',
      es: 'Desde 2024, Geostick utiliza agentes de limpieza más seguros, sin símbolos y sin sustancias nocivas.',
      it: 'Dal 2024, Geostick utilizza detergenti più sicuri, senza simboli e senza sostanze nocive.',
      pl: 'Od 2024 roku Geostick używa bezpieczniejszych, bezznakowych środków czyszczących bez szkodliwych substancji.',
      tr: '2024\'ten beri Geostick, zararlı maddeler içermeyen, daha güvenli, sembölsüz temizlik maddeleri kullanıyor.',
      ar: 'منذ عام 2024، تستخدم Geostick منظفات أكثر أمانًا وخالية من الرموز وبدون مواد ضارة.',
      zh: '自2024年起，Geostick使用更安全、无标志且不含有害物质的清洁剂。',
      pt: 'Desde 2024, a Geostick usa agentes de limpeza mais seguros, sem símbolos e sem substâncias nocivas.',
      ro: 'Din 2024, Geostick folosește agenți de curățare mai siguri, fără simboluri și fără substanțe dăunătoare.'
    }
  },
  {
    id: 'sust-8',
    category: 'sustainability',
    text: {
      nl: 'Het bedrijf bespaart jaarlijks ongeveer 100.000 A4\'tjes door papierloos orderbeheer in te voeren.',
      en: 'The company saves approximately 100,000 A4 sheets annually by implementing paperless order management.',
      de: 'Das Unternehmen spart jährlich etwa 100.000 A4-Blätter durch papierloses Auftragsverwaltung.',
      fr: 'L\'entreprise économise environ 100 000 feuilles A4 par an en mettant en place une gestion des commandes sans papier.',
      es: 'La empresa ahorra aproximadamente 100,000 hojas A4 al año al implementar la gestión de pedidos sin papel.',
      it: 'L\'azienda risparmia circa 100.000 fogli A4 all\'anno implementando la gestione degli ordini senza carta.',
      pl: 'Firma oszczędza rocznie około 100.000 arkuszy A4 dzięki wprowadzeniu bezpapierowego zarządzania zamówieniami.',
      tr: 'Şirket, kağıtsız sipariş yönetimi uygulayarak yılda yaklaşık 100.000 A4 kağıt tasarrufu sağlıyor.',
      ar: 'توفر الشركة حوالي 100,000 ورقة A4 سنويًا من خلال تطبيق إدارة الطلبات بدون ورق.',
      zh: '公司通过实施无纸化订单管理每年节省约100,000张A4纸。',
      pt: 'A empresa economiza aproximadamente 100.000 folhas A4 anualmente ao implementar gestão de pedidos sem papel.',
      ro: 'Compania economisește aproximativ 100.000 de foi A4 anual prin implementarea gestionării comenzilor fără hârtie.'
    }
  },
  {
    id: 'sust-9',
    category: 'sustainability',
    text: {
      nl: 'Door elektrische auto\'s toe te voegen werd 27.000 kg CO₂ per jaar bespaard.',
      en: 'By adding electric vehicles, 27,000 kg of CO₂ per year was saved.',
      de: 'Durch das Hinzufügen von Elektrofahrzeugen wurden 27.000 kg CO₂ pro Jahr eingespart.',
      fr: 'En ajoutant des véhicules électriques, 27 000 kg de CO₂ par an ont été économisés.',
      es: 'Al agregar vehículos eléctricos, se ahorraron 27,000 kg de CO₂ por año.',
      it: 'Aggiungendo veicoli elettrici, sono stati risparmiati 27.000 kg di CO₂ all\'anno.',
      pl: 'Dzięki dodaniu pojazdów elektrycznych zaoszczędzono 27.000 kg CO₂ rocznie.',
      tr: 'Elektrikli araçlar eklenerek yılda 27.000 kg CO₂ tasarrufu sağlandı.',
      ar: 'من خلال إضافة المركبات الكهربائية، تم توفير 27,000 كجم من ثاني أكسيد الكربون سنويًا.',
      zh: '通过增加电动汽车，每年节省了27,000公斤二氧化碳。',
      pt: 'Ao adicionar veículos elétricos, foram economizados 27.000 kg de CO₂ por ano.',
      ro: 'Prin adăugarea de vehicule electrice, au fost economisiți 27.000 kg de CO₂ pe an.'
    }
  },
  {
    id: 'sust-10',
    category: 'sustainability',
    text: {
      nl: 'Nieuwe kozijnen en HR++ glas in Heumen verlaagden het gasverbruik met meer dan 50%.',
      en: 'New window frames and HR++ glass in Heumen reduced gas consumption by more than 50%.',
      de: 'Neue Fensterrahmen und HR++-Glas in Heumen reduzierten den Gasverbrauch um mehr als 50 %.',
      fr: 'De nouveaux cadres de fenêtres et du verre HR++ à Heumen ont réduit la consommation de gaz de plus de 50 %.',
      es: 'Nuevos marcos de ventanas y vidrio HR++ en Heumen redujeron el consumo de gas en más del 50%.',
      it: 'Nuovi telai e vetro HR++ a Heumen hanno ridotto il consumo di gas di oltre il 50%.',
      pl: 'Nowe ramy okienne i szkło HR++ w Heumen zmniejszyły zużycie gazu o ponad 50%.',
      tr: 'Heumen\'deki yeni pencere çerçeveleri ve HR++ cam, gaz tüketimini %50\'den fazla azalttı.',
      ar: 'أطر النوافذ الجديدة وزجاج HR++ في Heumen قللت استهلاك الغاز بأكثر من 50%.',
      zh: 'Heumen的新窗框和HR++玻璃使天然气消耗减少了50%以上。',
      pt: 'Novos caixilhos e vidro HR++ em Heumen reduziram o consumo de gás em mais de 50%.',
      ro: 'Ramele noi de ferestre și sticla HR++ din Heumen au redus consumul de gaz cu peste 50%.'
    }
  },

  // ========================================
  // SOCIAL/EMPLOYEE FACTS
  // ========================================
  {
    id: 'social-1',
    category: 'social',
    text: {
      nl: '81% van de medewerkers heeft een vast contract.',
      en: '81% of employees have a permanent contract.',
      de: '81 % der Mitarbeiter haben einen unbefristeten Vertrag.',
      fr: '81 % des employés ont un contrat permanent.',
      es: 'El 81% de los empleados tiene un contrato permanente.',
      it: 'L\'81% dei dipendenti ha un contratto a tempo indeterminato.',
      pl: '81% pracowników ma umowę na czas nieokreślony.',
      tr: 'Çalışanların %81\'i süresiz sözleşmeye sahip.',
      ar: '81% من الموظفين لديهم عقد دائم.',
      zh: '81%的员工拥有永久合同。',
      pt: '81% dos funcionários têm contrato permanente.',
      ro: '81% dintre angajați au contract permanent.'
    }
  },
  {
    id: 'social-2',
    category: 'social',
    text: {
      nl: 'In 2024 werden 227 trainingen gevolgd, waarvan 95 gericht op persoonlijke ontwikkeling.',
      en: 'In 2024, 227 training sessions were completed, of which 95 focused on personal development.',
      de: 'Im Jahr 2024 wurden 227 Schulungen absolviert, davon 95 mit Schwerpunkt auf persönliche Entwicklung.',
      fr: 'En 2024, 227 formations ont été suivies, dont 95 axées sur le développement personnel.',
      es: 'En 2024 se completaron 227 capacitaciones, de las cuales 95 se centraron en el desarrollo personal.',
      it: 'Nel 2024 sono state completate 227 sessioni di formazione, di cui 95 focalizzate sullo sviluppo personale.',
      pl: 'W 2024 roku ukończono 227 szkoleń, z których 95 koncentrowało się na rozwoju osobistym.',
      tr: '2024\'te 227 eğitim tamamlandı, bunların 95\'i kişisel gelişime odaklandı.',
      ar: 'في عام 2024، تم إكمال 227 دورة تدريبية، 95 منها ركزت على التطوير الشخصي.',
      zh: '2024年完成了227次培训，其中95次专注于个人发展。',
      pt: 'Em 2024, foram concluídos 227 treinamentos, dos quais 95 focados em desenvolvimento pessoal.',
      ro: 'În 2024 au fost finalizate 227 de sesiuni de formare, dintre care 95 axate pe dezvoltarea personală.'
    }
  },
  {
    id: 'social-3',
    category: 'social',
    text: {
      nl: 'Er is een eigen Geostick Academy voor intern leren en ontwikkelen.',
      en: 'There is a dedicated Geostick Academy for internal learning and development.',
      de: 'Es gibt eine eigene Geostick Academy für internes Lernen und Entwicklung.',
      fr: 'Il existe une Geostick Academy dédiée à l\'apprentissage et au développement internes.',
      es: 'Existe una Geostick Academy dedicada al aprendizaje y desarrollo interno.',
      it: 'Esiste una Geostick Academy dedicata all\'apprendimento e allo sviluppo interno.',
      pl: 'Istnieje dedykowana Geostick Academy dla wewnętrznego uczenia się i rozwoju.',
      tr: 'İç öğrenme ve gelişim için özel bir Geostick Academy var.',
      ar: 'هناك أكاديمية Geostick مخصصة للتعلم والتطوير الداخلي.',
      zh: '有一个专门的Geostick学院用于内部学习和发展。',
      pt: 'Existe uma Geostick Academy dedicada ao aprendizado e desenvolvimento interno.',
      ro: 'Există o Geostick Academy dedicată învățării și dezvoltării interne.'
    }
  },
  {
    id: 'social-4',
    category: 'social',
    text: {
      nl: 'Het verzuimpercentage was in 2024 9,59%, tegenover 7,26% in 2023.',
      en: 'The absence rate was 9.59% in 2024, compared to 7.26% in 2023.',
      de: 'Die Fehlzeitenquote lag 2024 bei 9,59 %, gegenüber 7,26 % im Jahr 2023.',
      fr: 'Le taux d\'absence était de 9,59 % en 2024, contre 7,26 % en 2023.',
      es: 'La tasa de ausencia fue del 9,59% en 2024, en comparación con el 7,26% en 2023.',
      it: 'Il tasso di assenza era del 9,59% nel 2024, rispetto al 7,26% nel 2023.',
      pl: 'Wskaźnik absencji wynosił 9,59% w 2024 roku, w porównaniu do 7,26% w 2023 roku.',
      tr: 'Devamsızlık oranı 2024\'te %9,59 iken 2023\'te %7,26 idi.',
      ar: 'كان معدل الغياب 9.59% في عام 2024، مقارنة بـ 7.26% في عام 2023.',
      zh: '2024年的缺勤率为9.59%，而2023年为7.26%。',
      pt: 'A taxa de ausência foi de 9,59% em 2024, em comparação com 7,26% em 2023.',
      ro: 'Rata de absență a fost de 9,59% în 2024, comparativ cu 7,26% în 2023.'
    }
  },
  {
    id: 'social-5',
    category: 'social',
    text: {
      nl: 'Het aantal ongevallen met verzuim daalde van 6 in 2023 naar 3 in 2024.',
      en: 'The number of accidents with sick leave decreased from 6 in 2023 to 3 in 2024.',
      de: 'Die Anzahl der Unfälle mit Arbeitsausfall sank von 6 im Jahr 2023 auf 3 im Jahr 2024.',
      fr: 'Le nombre d\'accidents avec arrêt de travail a diminué de 6 en 2023 à 3 en 2024.',
      es: 'El número de accidentes con baja laboral disminuyó de 6 en 2023 a 3 en 2024.',
      it: 'Il numero di incidenti con congedo per malattia è diminuito da 6 nel 2023 a 3 nel 2024.',
      pl: 'Liczba wypadków z absencją spadła z 6 w 2023 roku do 3 w 2024 roku.',
      tr: 'İzinli kaza sayısı 2023\'te 6\'dan 2024\'te 3\'e düştü.',
      ar: 'انخفض عدد الحوادث مع الإجازة المرضية من 6 في عام 2023 إلى 3 في عام 2024.',
      zh: '带病假的事故数量从2023年的6起减少到2024年的3起。',
      pt: 'O número de acidentes com licença médica diminuiu de 6 em 2023 para 3 em 2024.',
      ro: 'Numărul de accidente cu concediu medical a scăzut de la 6 în 2023 la 3 în 2024.'
    }
  },
  {
    id: 'social-6',
    category: 'social',
    text: {
      nl: 'Geostick biedt via OpenUp mentale ondersteuning voor medewerkers én hun gezinsleden.',
      en: 'Geostick offers mental support through OpenUp for employees and their family members.',
      de: 'Geostick bietet über OpenUp mentale Unterstützung für Mitarbeiter und ihre Familienmitglieder.',
      fr: 'Geostick offre un soutien mental via OpenUp pour les employés et les membres de leur famille.',
      es: 'Geostick ofrece apoyo mental a través de OpenUp para empleados y sus familiares.',
      it: 'Geostick offre supporto mentale tramite OpenUp per i dipendenti e i loro familiari.',
      pl: 'Geostick oferuje wsparcie psychiczne za pośrednictwem OpenUp dla pracowników i członków ich rodzin.',
      tr: 'Geostick, çalışanlar ve aile üyeleri için OpenUp aracılığıyla zihinsel destek sunuyor.',
      ar: 'تقدم Geostick الدعم النفسي عبر OpenUp للموظفين وأفراد عائلاتهم.',
      zh: 'Geostick通过OpenUp为员工及其家庭成员提供心理支持。',
      pt: 'A Geostick oferece suporte mental via OpenUp para funcionários e seus familiares.',
      ro: 'Geostick oferă suport mental prin OpenUp pentru angajați și membrii familiilor lor.'
    }
  },
  {
    id: 'social-7',
    category: 'social',
    text: {
      nl: 'Het bedrijf won in 2024 het Predicaat Koninklijk, waarmee het officieel Koninklijke Geostick B.V. werd.',
      en: 'The company won the Royal Designation in 2024, officially becoming Koninklijke Geostick B.V.',
      de: 'Das Unternehmen erhielt 2024 das Prädikat Königlich und wurde offiziell Koninklijke Geostick B.V.',
      fr: 'L\'entreprise a remporté le titre royal en 2024, devenant officiellement Koninklijke Geostick B.V.',
      es: 'La empresa ganó la Designación Real en 2024, convirtiéndose oficialmente en Koninklijke Geostick B.V.',
      it: 'L\'azienda ha ottenuto il titolo Reale nel 2024, diventando ufficialmente Koninklijke Geostick B.V.',
      pl: 'Firma zdobyła tytuł Królewski w 2024 roku, stając się oficjalnie Koninklijke Geostick B.V.',
      tr: 'Şirket 2024\'te Kraliyet Ünvanını kazandı ve resmi olarak Koninklijke Geostick B.V. oldu.',
      ar: 'فازت الشركة بلقب ملكي في عام 2024، لتصبح رسميًا Koninklijke Geostick B.V.',
      zh: '公司于2024年获得皇家称号，正式成为Koninklijke Geostick B.V.。',
      pt: 'A empresa ganhou a Designação Real em 2024, tornando-se oficialmente Koninklijke Geostick B.V.',
      ro: 'Compania a câștigat titlul Regal în 2024, devenind oficial Koninklijke Geostick B.V.'
    }
  }
];

/**
 * Get a random fact from the collection
 */
export function getRandomFact(): GeostickFact {
  const randomIndex = Math.floor(Math.random() * geostickFacts.length);
  return geostickFacts[randomIndex];
}

/**
 * Get a random fact from a specific category
 */
export function getRandomFactByCategory(category: FactCategory): GeostickFact {
  const categoryFacts = geostickFacts.filter(fact => fact.category === category);
  const randomIndex = Math.floor(Math.random() * categoryFacts.length);
  return categoryFacts[randomIndex];
}

/**
 * Get all facts from a specific category
 */
export function getFactsByCategory(category: FactCategory): GeostickFact[] {
  return geostickFacts.filter(fact => fact.category === category);
}
