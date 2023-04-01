import wikiLogo from './images/wiki-globe.png';
import googleplay from './images/footer/google_play.png';
import appstore from './images/footer/app-store.png';
import wiki_w from './images/footer/wiki-w.png';
import wiki_media from './images/footer/wikimedia-found.png';
import commons from './images/other-wikis/commons.png';
import mediawiki from './images/other-wikis/mediawiki.png';
import metawiki from './images/other-wikis/metawiki.png';
import wikibooks from './images/other-wikis/wikibooks.png';
import wikivoyage from './images/other-wikis/wikivoyage.png';
import wiktionary from './images/other-wikis/wiktionary.png';
import wikidata from './images/other-wikis/wikidata.png';
import wikinews from './images/other-wikis/wikinews.png';
import wikiquote from './images/other-wikis/wikiquote.png';
import wikisource from './images/other-wikis/wikisource.png';
import wikispecies from './images/other-wikis/wikispecies.png';
import wikiversity from './images/other-wikis/wikiversity.png';

export default function Homepage() {


    const langList = [
        {
            lang: 'English',
            articles: '6 585 000+ articles',
            langCode: 'en',
            langTitle: 'English',
        },
        {
            lang: 'Русский',
            articles: '1 874 000+ статей',
            langCode: 'ru',
            langTitle: 'Русский',
        },
        {
            lang: 'Deutsch',
            articles: '2 749 000+ Artikel',
            langCode: 'de',
            langTitle: 'Deutsch',
        },
        {
            lang: 'Italiano',
            articles: '1 785 000+ voci',
            langCode: 'it',
            langTitle: 'Italiano',
        },
        {
            lang: 'فارسی',
            articles: 'مقاله 000 940+',
            langCode: 'fa',
            langTitle: 'فارسی',
        },
        {
            lang: '日本語',
            articles: '1 353 000+ 記事',
            langCode: 'ja',
            langTitle: '日本語',
        },
        {
            lang: 'Français',
            articles: '2 476 000+ articles',
            langCode: 'fr',
            langTitle: 'Français',
        },
        {
            lang: 'Español',
            articles: '1 822 000+ artículos',
            langCode: 'es',
            langTitle: 'Español',

        },
        {
            lang: '中文',
            articles: '1 322 000+ 条目 / 條目',
            langCode: 'zh',
            langTitle: '中文',
        },
        {
            lang: 'Português',
            articles: '1 096 000+ artigos',
            langCode: 'pt',
            langTitle: 'Português',
        }
    ]
    const megalanglist = 
    [
        "Polski",
        "العربية",
        "Deutsch",
        "English",
        "Español",
        "Français",
        
    ]
    return (
        <body>
            <header>
                <div class='header-img-cont'>
                    <img src={wikiLogo} />
                </div>
                <div id='title-container'>
                    <div id='main-heading'>
                        W<span>IKIPEDI</span>A
                    </div>
                    <div id='sub-heading'>The Free Encyclopedia</div>
                </div>
            </header>

            <main>
                <div id='graphic-box'>
                    <div id='languages-graphic'>
                    {
                        langList.map((lang,i) => {
                            return (
                                <a href='#' class='language-box' key={i}>
                                    <div class='lang-heading'>{lang.lang}</div>
                                    <div class='lang-articles'>{lang.articles}</div>
                                </a>
                            )
                        })
                    }
                    </div>
                </div>

                <div id='searchbar'>
                    <div id='search-box'>
                        <input type='text' />
                        <a href='#'>
                            EN<span class='material-symbols-outlined'>expand_more</span>
                        </a>
                    </div>
                    <a href='#'>
                        <span id='search-btn' class='material-symbols-outlined'>
                            search
                        </span>
                    </a>
                </div>

                <div id='lang-mega-box'>
                    <input type='checkbox' id='lang-check' />
                    <label for='lang-check'>
                        <span class='material-symbols-outlined'>translate</span>
                        Read Wikipedia in your language
                        <span class='material-symbols-outlined'>expand_more</span>
                    </label>

                    <div class='lang-cont'>
                        <div class='lang-art-box' id='articles-106'>
                            <div class='lang-art-head'>1 000 000+ articles</div>
                            <div class='lang-art-cont'>
                                <ul>
                                    <li>
                                        <a href='#' lang='pl'>
                                            Polski
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ar' title='Al-ʿArabīyah'>
                                            <bdi dir='rtl'>العربية</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='de'>
                                            Deutsch
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='en' title='English'>
                                            English
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='es'>
                                            Español
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='fr' title='français'>
                                            Français
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='it'>
                                            Italiano
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='arz' title='Maṣrī'>
                                            <bdi dir='rtl'>مصرى</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='nl'>
                                            Nederlands
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ja' title='Nihongo'>
                                            日本語
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='pt'>
                                            Português
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ceb'>
                                            Sinugboanong
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='sv'>
                                            Svenska
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='uk' title='Ukrayins’ka'>
                                            Українська
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='vi'>
                                            Tiếng Việt
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='war'>
                                            Winaray
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='zh' title='Zhōngwén'>
                                            中文
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ru' title='Russkiy'>
                                            Русский
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class='lang-art-box' id='articles-105'>
                            <div class='lang-art-head'>100 000+ articles</div>
                            <div class='lang-art-cont'>
                                <ul>
                                    <li>
                                        <a href='#' lang='af'>
                                            Afrikaans
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#/' lang='ast'>
                                            Asturianu
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='az'>
                                            Azərbaycanca
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='bg' title='Bǎlgarski'>
                                            Български
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='nan'>
                                            Bân-lâm-gú
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='bn' title='Bangla'>
                                            বাংলা
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='be' title='Belaruskaya'>
                                            Беларуская
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ca'>
                                            Català
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='cs' title='čeština'>
                                            Čeština
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='cy' title='Cymraeg'>
                                            Cymraeg
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='da'>
                                            Dansk
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='et'>
                                            Eesti
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='el' title='Ellīniká'>
                                            Ελληνικά
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='eo'>
                                            Esperanto
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='eu'>
                                            Euskara
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='fa' title='Fārsi'>
                                            <bdi dir='rtl'>فارسی</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='gl'>
                                            Galego
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ko' title='Hangugeo'>
                                            한국어
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='hi' title='Hindī'>
                                            हिन्दी
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='hr'>
                                            Hrvatski
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='id'>
                                            Bahasa Indonesia
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='he' title='Ivrit'>
                                            <bdi dir='rtl'>עברית</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ka' title='Kartuli'>
                                            ქართული
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='la'>
                                            Latina
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='lv'>
                                            Latviešu
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='lt'>
                                            Lietuvių
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='hu'>
                                            Magyar
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='mk' title='Makedonski'>
                                            Македонски
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ce' title='Noxçiyn'>
                                            Нохчийн
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ro' title='Română'>
                                            Română
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='en'>
                                            Simple English
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='sk'>
                                            Slovenčina
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='sl' title='slovenščina'>
                                            Slovenščina
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='sr'>
                                            Српски / Srpski
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='sh'>
                                            Srpskohrvatski
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='fi' title='suomi'>
                                            Suomi
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ta' title='Tamiḻ'>
                                            தமிழ்
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='tt'>
                                            Татарча / Tatarça
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='th' title='Phasa Thai'>
                                            ภาษาไทย
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='tg' title='Tojikī'>
                                            Тоҷикӣ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#/' lang='azb' title='Türkce'>
                                            <bdi dir='rtl'>تۆرکجه</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='tr' title='Türkçe'>
                                            Türkçe
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ur' title='Urdu'>
                                            <bdi dir='rtl'>اردو</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='yue' title='Yuht Yúh / Jyut6 jyu5'>
                                            粵語
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='hy' title='Hayeren'>
                                            Հայերեն
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='my' title='Myanmarsar'>
                                            မြန်မာဘာသာ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class='lang-art-box' id='articles-104'>
                            <div class='lang-art-head'>10 000+ articles</div>
                            <div class='lang-art-cont'>
                                <ul>
                                    <li>
                                        <a href='#' lang='ace'>
                                            Bahsa Acèh
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='gsw'>
                                            Alemannisch
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='am' title='Āmariññā'>
                                            አማርኛ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='an'>
                                            Aragonés
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='hyw' title='Arevmdahayeren'>
                                            Արեւմտահայերէն
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ban' title='Basa Bali'>
                                            Basa Bali
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='bjn'>
                                            Bahasa Banjar
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='map-x-bms'>
                                            Basa Banyumasan
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ba' title='Başqortsa'>
                                            Башҡортса
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='be' title='Belaruskaya (Taraškievica)'>
                                            Беларуская (Тарашкевіца)
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='bcl'>
                                            Bikol Central
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='bpy' title='Bishnupriya Manipuri'>
                                            বিষ্ণুপ্রিয়া মণিপুরী
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='bar'>
                                            Boarisch
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='bs'>
                                            Bosanski
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='br'>
                                            Brezhoneg
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='cv' title='Čăvašla'>
                                            Чӑвашла
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='nv'>
                                            Diné Bizaad
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='roa-x-eml'>
                                            Emigliàn–Rumagnòl
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='hif'>
                                            Fiji Hindi
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='fo'>
                                            Føroyskt
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='fy'>
                                            Frysk
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ga'>
                                            Gaeilge
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='gd'>
                                            Gàidhlig
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='gu' title='Gujarati'>
                                            ગુજરાતી
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='hak'>
                                            Hak-kâ-ngî / 客家語
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ha' title='Hausa'>
                                            Hausa
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='hsb'>
                                            Hornjoserbsce
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='io' title='Ido'>
                                            Ido
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ig'>
                                            Igbo
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ilo'>
                                            Ilokano
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ia'>
                                            Interlingua
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ie'>
                                            Interlingue
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='os' title='Iron'>
                                            Ирон
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='is'>
                                            Íslenska
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='jv' title='Jawa'>
                                            Jawa
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='kn' title='Kannada'>
                                            ಕನ್ನಡ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ht'>
                                            Kreyòl Ayisyen
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ku'>
                                            <span lang='ku-Latn'>Kurdî</span> /
                                            <bdi lang='ku-Arab' dir='rtl'>
                                                كوردی
                                            </bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ckb' title='Kurdîy Nawendî'>
                                            <bdi dir='rtl'>کوردیی ناوەندی</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ky' title='Kyrgyzča'>
                                            Кыргызча
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='mjr' title='Kyryk Mary'>
                                            Кырык мары
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='lb'>
                                            Lëtzebuergesch
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='lij'>
                                            Lìgure
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='li'>
                                            Limburgs
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='lmo'>
                                            Lombard
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='mai' title='Maithilī'>
                                            मैथिली
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='mg'>
                                            Malagasy
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ml' title='Malayalam'>
                                            മലയാളം
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='lzh' title='Man4jin4 / Wényán'>
                                            文言
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='mr' title='Marathi'>
                                            मराठी
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='xmf' title='Margaluri'>
                                            მარგალური
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='mzn' title='Mäzeruni'>
                                            <bdi dir='rtl'>مازِرونی</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='mn' title='Mongol'>
                                            Монгол
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='nap'>
                                            Napulitano
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='new' title='Nepal Bhasa'>
                                            नेपाल भाषा
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ne' title='Nepālī'>
                                            नेपाली
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='frr'>
                                            Nordfriisk
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='oc'>
                                            Occitan
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='mhr' title='Olyk Marij'>
                                            Олык марий
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='or' title='Oṛiā'>
                                            ଓଡି଼ଆ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='as' title='Ôxômiya'>
                                            অসমীযা়
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='pa' title='Pañjābī (Gurmukhī)'>
                                            ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ)
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='pnb' title='Pañjābī (Shāhmukhī)'>
                                            <bdi dir='rtl'>پنجابی (شاہ مکھی)</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ps' title='Paʂto'>
                                            <bdi dir='rtl'>پښتو</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='pms'>
                                            Piemontèis
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='nds'>
                                            Plattdüütsch
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='crh'>
                                            Qırımtatarca
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='qu'>
                                            Runa Simi
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='sa' title='Saṃskṛtam'>
                                            संस्कृतम्
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='sah' title='Saxa Tyla'>
                                            Саха Тыла
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='sco'>
                                            Scots
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='sq'>
                                            Shqip
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='scn'>
                                            Sicilianu
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='si' title='Siṃhala'>
                                            සිංහල
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='sd' title='Sindhī'>
                                            <bdi dir='rtl'>سنڌي</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='szl'>
                                            Ślůnski
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='su'>
                                            Basa Sunda
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='sw'>
                                            Kiswahili
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='tl'>
                                            Tagalog
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='shn'>
                                            ၽႃႇသႃႇတႆး
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='te' title='Telugu'>
                                            తెలుగు
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='vec'>
                                            Vèneto
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='vo'>
                                            Volapük
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='wa'>
                                            Walon
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='wuu' title='Wúyǔ'>
                                            吴语
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='yi' title='Yidiš'>
                                            <bdi dir='rtl'>ייִדיש</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='yo'>
                                            Yorùbá
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='diq' title='Zazaki'>
                                            Zazaki
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='sgs'>
                                            Žemaitėška
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='zu'>
                                            isiZulu
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class='lang-art-box' id='articles-103'>
                            <div class='lang-art-head'>1000+ articles</div>
                            <div class='lang-art-cont'>
                                <ul>
                                    <li>
                                        <a href='#' lang='lad'>
                                            <span lang='lad-Latn'>Dzhudezmo</span> /
                                            <bdi lang='lad-Hebr' dir='rtl'>
                                                לאדינו
                                            </bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='kbd' title='Adighabze'>
                                            Адыгэбзэ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ang'>
                                            Ænglisc
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='smn' title='anarâškielâ'>
                                            Anarâškielâ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ab' title='aṗsshwa'>
                                            аԥсшәа
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='roa-rup'>
                                            Armãneashce
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='frp'>
                                            Arpitan
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='arc' title='Ātûrāyâ'>
                                            <bdi dir='rtl'>ܐܬܘܪܝܐ</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='gn'>
                                            Avañe’ẽ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='av' title='Avar'>
                                            Авар
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ay'>
                                            Aymar
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='bh' title='Bhōjapurī'>
                                            भोजपुरी
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='bi'>
                                            Bislama
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='bo' title='Bod Skad'>
                                            བོད་ཡིག
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='bxr' title='Buryad'>
                                            Буряад
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='cbk-x-zam'>
                                            Chavacano de Zamboanga
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='co'>
                                            Corsu
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='za'>
                                            Vahcuengh / 話僮
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='dag'>
                                            Dagbanli
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ary' title='Darija'>
                                            <bdi dir='rtl'>الدارجة</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='se' title='davvisámegiella'>
                                            Davvisámegiella
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='pdc'>
                                            Deitsch
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='dv' title='Divehi'>
                                            <bdi dir='rtl'>ދިވެހިބަސް</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='dsb'>
                                            Dolnoserbski
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='myv' title='Erzjanj'>
                                            Эрзянь
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ext'>
                                            Estremeñu
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='fur'>
                                            Furlan
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='gv'>
                                            Gaelg
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='gag'>
                                            Gagauz
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='inh' title='Ghalghai'>
                                            ГӀалгӀай
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ki'>
                                            Gĩkũyũ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='glk' title='Giləki'>
                                            <bdi dir='rtl'>گیلکی</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='#'
                                            lang='gan'
                                            title='Gon ua'
                                            data-hans='赣语'
                                            data-hant='贛語'
                                            class='jscnconv'
                                        >
                                            赣语 / 贛語
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='guw'>
                                            Gungbe
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='xal' title='Halʹmg'>
                                            Хальмг
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='haw'>
                                            ʻŌlelo Hawaiʻi
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='rw'>
                                            Ikinyarwanda
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='kbp'>
                                            Kabɩyɛ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='pam'>
                                            Kapampangan
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='csb'>
                                            Kaszëbsczi
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='kw'>
                                            Kernewek
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='km' title='Phéasa Khmér'>
                                            ភាសាខ្មែរ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='kv' title='Komi'>
                                            Коми
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='koi' title='Perem Komi'>
                                            Перем коми
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='kg'>
                                            Kongo
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='gom'>
                                            कोंकणी / Konknni
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ks' title='Koshur'>
                                            <bdi dir='rtl'>كٲشُر</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='gcr' title='Kriyòl Gwiyannen'>
                                            Kriyòl Gwiyannen
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='lo' title='Phaasaa Laao'>
                                            ພາສາລາວ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='lbe' title='Lakku'>
                                            Лакку
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ltg'>
                                            Latgaļu
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='lez' title='Lezgi'>
                                            Лезги
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='nia'>
                                            Li Niha
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ln'>
                                            Lingála
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='jbo'>
                                            lojban
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='lg'>
                                            Luganda
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='mt'>
                                            Malti
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='mi'>
                                            Māori
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='tw' title='Mfantse'>
                                            Twi
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='mwl'>
                                            Mirandés
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='mdf' title='Mokšenj'>
                                            Мокшень
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='mnw'>
                                            ဘာသာ မန်
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='nqo' title="N'Ko">
                                            ߒߞߏ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='fj'>
                                            Na Vosa Vaka-Viti
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='nah'>
                                            Nāhuatlahtōlli
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='na'>
                                            Dorerin Naoero
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='nds-nl'>
                                            Nedersaksisch
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='nov'>
                                            Novial
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='om' title='Ingiliffaa'>
                                            Afaan Oromoo
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='pi' title='Pāḷi'>
                                            पालि
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='pag'>
                                            Pangasinán
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='pap'>
                                            Papiamentu
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='pfl'>
                                            Pfälzisch
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='pcd'>
                                            Picard
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='krc' title='Qaraçay–Malqar'>
                                            Къарачай–малкъар
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='kaa'>
                                            Qaraqalpaqsha
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ksh'>
                                            Ripoarisch
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='rm'>
                                            Rumantsch
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='rue' title='Rusin’skyj'>
                                            Русиньскый
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='sm'>
                                            Gagana Sāmoa
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='sat' title='Santali'>
                                            ᱥᱟᱱᱛᱟᱲᱤ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='sc' title='Sardu'>
                                            Sardu
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='trv'>
                                            Seediq
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='stq'>
                                            Seeltersk
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='nso'>
                                            Sesotho sa Leboa
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='sn'>
                                            ChiShona
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='so'>
                                            Soomaaliga
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='srn'>
                                            Sranantongo
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='kab' title='Taqbaylit'>
                                            Taqbaylit
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='roa'>
                                            Tarandíne
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='tet'>
                                            Tetun
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='tpi'>
                                            Tok Pisin
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='to'>
                                            faka Tonga
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='chr' title='Tsalagi'>
                                            ᏣᎳᎩ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='tum'>
                                            chiTumbuka
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='tk'>
                                            Türkmençe
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='tyv' title='Tyva dyl'>
                                            Тыва дыл
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='udm' title='Udmurt'>
                                            Удмурт
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ug'>
                                            <bdi dir='rtl'>ئۇيغۇرچه</bdi>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='vep'>
                                            Vepsän
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='fiu-vro'>
                                            Võro
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='vls'>
                                            West-Vlams
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='wo'>
                                            Wolof
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class='lang-art-box' id='articles-102'>
                            <div class='lang-art-head'>100+ articles</div>
                            <div class='lang-art-cont'>
                                <ul>
                                    <li>
                                        <a href='#' lang='ak'>
                                            Akan
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='bm'>
                                            Bamanankan
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ch'>
                                            Chamoru
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ny'>
                                            Chichewa
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ee'>
                                            Eʋegbe
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ff'>
                                            Fulfulde
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='got' title='Gutisk'>
                                            𐌲𐌿𐍄𐌹𐍃𐌺
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='iu'>
                                            ᐃᓄᒃᑎᑐᑦ / Inuktitut
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ik'>
                                            Iñupiak
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='kl'>
                                            Kalaallisut
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='mad'>
                                            Madhurâ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='cr'>
                                            Nēhiyawēwin / ᓀᐦᐃᔭᐍᐏᐣ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='pih'>
                                            Norfuk / Pitkern
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ami'>
                                            Pangcah
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='pwn'>
                                            pinayuanan
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='pnt' title='Pontiaká'>
                                            Ποντιακά
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='dz' title='Rdzong-Kha'>
                                            རྫོང་ཁ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='rmy'>
                                            romani čhib
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='rn'>
                                            Ikirundi
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='sg'>
                                            Sängö
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='st'>
                                            Sesotho
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='tn'>
                                            Setswana
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ss'>
                                            SiSwati
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ti' title='Təgərəña'>
                                            ትግርኛ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='din'>
                                            Thuɔŋjäŋ
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='chy'>
                                            Tsėhesenėstsestotse
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ts'>
                                            Xitsonga
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='kcg'>
                                            Tyap
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' lang='ve'>
                                            Tshivenḓa
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id='other-box'>
                        <a href='#'>Other languages</a>
                    </div>
                </div>
            </main>

            <footer>
                <div id='link-box'>
                    <div id='wiki-found'>
                        <div class='wiki-found-img-cont'>
                        <img src={wiki_media} />
                            {/* <img src='images\footer\wikimedia-found.png' alt='wiki-foundation' /> */}
                        </div>
                        <div class='wiki-found-text-cont'>
                            Wikipedia is hosted by the Wikimedia Foundation, a non-profit organization that also hosts a
                            range of other projects.
                            <br />
                            <a href='#'>You can support our work with a donation</a>
                        </div>
                    </div>
                    <div id='wiki-download'>
                        <div class='download-img-cont'>
                            <img src={wiki_w} />
                            {/* <img src='images\footer\wiki-w.png' alt='wiki-w' /> */}
                        </div>
                        <div class='download-text-cont'>
                            <div id='download-heading'>Download Wikipedia for Android or iOS</div>
                            <div id='download-body'>
                                Save your favorite articles to read offline, sync your reading lists across devices and
                                customize your reading experience with the official Wikipedia app.
                            </div>
                            <div id='download-btn-cont'>
                                <img src={googleplay} />
                                {/* <img src='/images/footer/app-store.png' /> */}
                            </div>
                            <div id='download-btn-cont'>
                                <img src={appstore} />
                            </div>
                        </div>
                    </div>

                    <div id='wiki-apps'>
                        <div class='app-cont'>
                            {/* <img src='images/other-wikis/commons.png' alt='commons' class='app-icon' /> */}
                            <img src={commons} />
                            <div class='app-info'>
                                <div class='app-name'>Commons</div>
                                <div class='app-desc'>Freely usable photos & more</div>
                            </div>
                        </div>

                        <div class='app-cont'>
                            {/* <img src='images/other-wikis/wikivoyage.png' alt='voyage' class='app-icon' /> */}
                            <img src={wikivoyage} />
                            <div class='app-info'>
                                <div class='app-name'>Wikivoyage</div>
                                <div class='app-desc'>Free travel guide</div>
                            </div>
                        </div>

                        <div class='app-cont'>
                        <img src={wiktionary} />
                            {/* <img src='images/other-wikis/wiktionary.png' alt='wiktionary' class='app-icon' /> */}
                            <div class='app-info'>
                                <div class='app-name'>Wiktionary</div>
                                <div class='app-desc'>Free Dictionary</div>
                            </div>
                        </div>

                        <div class='app-cont'>
                            {/* <img src='images/other-wikis/wikibooks.png' alt='wikibooks' class='app-icon' /> */}
                            <img src={wikibooks} />
                            <div class='app-info'>
                                <div class='app-name'>Wikibooks</div>
                                <div class='app-desc'>Free textbooks</div>
                            </div>
                        </div>

                        <div class='app-cont'>
                            {/* <img src='images/other-wikis/wikinews.png' alt='wikinews' class='app-icon' /> */}
                            <img src={wikinews} />
                            <div class='app-info'>
                                <div class='app-name'>Wikinews</div>
                                <div class='app-desc'>Free news source</div>
                            </div>
                        </div>

                        <div class='app-cont'>
                            {/* <img src='images/other-wikis/wikidata.png' alt='wikidata' class='app-icon' /> */}
                            <img src={wikidata} />
                            <div class='app-info'>
                                <div class='app-name'>Wikidata</div>
                                <div class='app-desc'>Free knowledge base</div>
                            </div>
                        </div>

                        <div class='app-cont'>
                        <img src={wikiversity} />
                            {/* <img src='images/other-wikis/wikiversity.png' alt='wikiversity' class='app-icon' /> */}
                            <div class='app-info'>
                                <div class='app-name'>Wikiversity</div>
                                <div class='app-desc'>Free course materials</div>
                            </div>
                        </div>

                        <div class='app-cont'>
                        <img src={wikiquote} />
                            {/* <img src='images/other-wikis/wikiquote.png' alt='wikiquote' class='app-icon' /> */}
                            <div class='app-info'>
                                <div class='app-name'>Wikiquote</div>
                                <div class='app-desc'>Free quote compendium</div>
                            </div>
                        </div>

                        <div class='app-cont'>
                        <img src={mediawiki} />
                            {/* <img src='images/other-wikis/mediawiki.png' alt='mediawiki' class='app-icon' /> */}
                            <div class='app-info'>
                                <div class='app-name'>MediaWiki</div>
                                <div class='app-desc'>Free & open wiki application</div>
                            </div>
                        </div>

                        <div class='app-cont'>
                        <img src={wikisource} />
                            {/* <img src='images/other-wikis/wikisource.png' alt='wikisource' class='app-icon' /> */}
                            <div class='app-info'>
                                <div class='app-name'>Wikisource</div>
                                <div class='app-desc'>Free library</div>
                            </div>
                        </div>

                        <div class='app-cont'>
                        <img src={wikispecies} />
                            {/* <img src='images/other-wikis/wikispecies.png' alt='wikispecies' class='app-icon' /> */}
                            <div class='app-info'>
                                <div class='app-name'>Wikispecies</div>
                                <div class='app-desc'>Free species directory</div>
                            </div>
                        </div>

                        <div class='app-cont'>
                        <img src={metawiki} />
                            {/* <img src='images/other-wikis/metawiki.png' alt='metawiki' class='app-icon' /> */}
                            <div class='app-info'>
                                <div class='app-name'>Meta-wiki</div>
                                <div class='app-desc'>Community coordination and documentation</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='terms-box'>
                    This page is available under the <a href='#'>Creative Commons Attribution-ShareAlike License</a> •{' '}
                    <a href='#'>Terms of Use</a> • <a href='#'>Privacy Policy</a>
                </div>
            </footer>
        </body>
    );
}
