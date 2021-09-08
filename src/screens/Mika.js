import '../styles/mikastyles.css'
import React from 'react'
import Saavutukset from '../components/Saavutukset'

const Mika = () => {
    return (
        <div>
            <h3>Mika Korhonen</h3>
            <p>"Rakkaudesta rautaan"</p>

            <p>Valmennan asiakkaitani yli 40 vuoden kokemuksella ja ammattitaidolla. Asiakaskuntani muodostuu tavoitteellisista urheilijoista ja kisaajista aina peruskuntoilijoihin.</p>
            <p>Vanhempana valmentajana tiedän myös, kuinka tärkeää on sekä toimintakyvyn säilyttäminen että lihaskunnon ylläpitäminen etenkin vanhemmalla iällä. Seniori-ikäisten valmennus onkin muodostunut minulle sydämen asiaksi.</p>
            <p>Olen itsekin kilpaillut kehonrakennuksessa, mutta viimeisen kymmenen vuoden ajan olen kuntoillut ja kuntouttanut itseäni muutamista vammoista. Kuntouttamiseen liittyvät haasteet, motivaatio ja tekeminen ovat siis minulle erittäin tuttuja asioita.</p>
            <p>Itse rentoudun parhaiten metsässä koirieni kanssa ja teen lenkin lähes joka aamu. Siitä saan voimaa ja energiaa, jota haluan jakaa myös valmennettavilleni eteenpäin.</p>
            <p>Minulle on tärkeää, että saamme yhdessä asiakkaan toivomia tuloksia aikaan, kuitenkin aina terveys ja hyvinvointi edellä. Haluan, että jokainen saisi urheilusta ja kuntoilusta ikuisen ystävän.</p>

            <p>”Treenataan tosissaan, mutta ei liian vakavasti”</p>
            {/*Linkki yhteydenottoon*/}
            <p>Voit tutustua palveluihini tästä{/* linkki */}</p>

            <h4>Koulutus:</h4>

            <p>Personal Trainer, FAF</p>
            <p>Fitnessvalmentaja, SFU</p>
            <p>Urheiluhieroja</p>


            <h4>Tausta ja saavutukset</h4>

            <p>Nuorempana harrastin yleisurheilua noin 10 vuoden ajan ja samalla judoa, josta viimeiset kaksi vuotta kilpailumielessä. </p>
            <p>Samoihin aikoihin halusin lisää voimaa, joten isäni osti minulle kotiin Weiderin vinyylisarjan penkkeineen. Vuonna 1975 liityin Lappeenrannan atleettiklubiin ja salitreenit ovat olleet siitä asti mukana elämässäni tavalla tai toisella.</p>
            <p>Kehonrakennus on ollut harrastuksena kilpailumielessä vuodesta 1979 alkaen reilut 20 vuotta, saavutuksina mm. SM-kultaa ja PM-hopeaa vuonna 1982.</p>
            <p>Viimeisimpiin kisoihin osallistuin vuonna 2001, tuloksena SM-pronssia masters-sarjassa eli raskaassa sarjassa.</p>


            <h4>Erityisosaaminen ja vahvuuteni valmentajana</h4>

            <p>Vahvuutenani on yli 40 vuoden kokemus kehonrakennus- ja kuntosaliharjoittelusta sekä erilaisten ruokavalioiden yksilöllisestä suunnittelusta niin kilpailijoille kuin kuntoilijoillekin.</p>
            <p>Olen kunnianhimoinen, luotettava, kannustava ja sosiaalinen treenari, joka on aina täysillä mukana ja asiakkaan tukena.</p>
            <p>Minulle on tärkeää saada tuloksia aikaan, ja asiakas ymmärtämään riittävän urheilun ja monipuolisen ruokavalion vaikutuksen kokonaisvaltaiseen hyvinvointiin.</p>


            <h4>Team Tähtikunto ja kisat</h4>

            <p>Kisatiimini Team Tähtikunnon {/* tähän linkki @teamtahtikunto instaan*/}päävalmentajana olen ollut jo toistakymmentä vuotta, samoin tuomarin tehtävissä body- ja fitnesskisoissa.</p>
            <p>Kokemusta ja kohtaamisia erilaisten ihmisten ja urheilijoiden kanssa siis löytyy, vaikka tässä työssä oppii koko ajan myös lisää. Se tekee työstäni erittäin mielenkiintoisen.</p>


            <p>Haluatko sinäkin elämäsi kuntoon?</p>

            <p>Valmentamieni urheilijoiden saavutuksia fitness- ja kehonrakennuskilpailuissa: </p>
            <Saavutukset />

        </div>
    )
}

export default Mika
