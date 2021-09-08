import React from 'react'
import Table from 'react-bootstrap/Table'

const Saavutukset = () => {
    return (
        <Table className="taulukko" responsive>
            <tbody>
                {/* <tr>
                    <th></th>
                    <td><b></b><br /></td>
                </tr>*/}
                <tr>
                    <th>2021</th>
                    <td><b>Besmellah Mardani</b><br />
                        Classic physique junioreiden SM-hopeaa</td>
                </tr>
                <tr>
                    <th></th>
                    <td><b>Robert Nitz</b><br />
                        Fitness Classic, Classic bodybuilding masters -sarja, kultaa<br />
                        Classic bodybuilding yleinen sarja, hopeaa</td>
                </tr>
                <tr>
                    <th>2020</th>
                    <td><b>Johanna Keikko</b><br />
                        Wellness fitness -166 cm, SM-kultaa<br />
                        Wellness fitness MM, 5.sija</td>
                </tr>
                <tr>
                    <th></th>
                    <td><b>Robert Nitz</b><br />
                        Classic bodybuilding yleinen sarja, SM-hopeaa<br />
                        Classic bodybuilding +40 v, SM-hopeaa<br />
                        Classic bodybuilding EM???????????????????</td>
                </tr>
                <tr>
                    <th></th>
                    <td><b>Jasmin Sarin</b><br />
                        Bikini fitness -158 cm, SM 8. sija</td>
                </tr>
                <tr>
                    <th>2019</th>
                    <td><b>Johanna Keikko</b><br />
                        Wellness fitness -164 cm, SM-hopeaa</td>
                </tr>
                <tr>
                    <th></th>
                    <td><b>Enni Sinisalo</b><br />
                        Fitness Classic, Bikini fitness yleinen sarja -168 cm, 4. sija<br />
                        Junioreiden SM-kisoissa 5. sija</td>
                </tr>
                <tr>
                    <th></th>
                    <td><b>Pinja Putkonen</b><br />
                        Fitness Classic, Bikini fitness yleinen sarja -168 cm, 6. sija<br />
                        Junioreiden SM-kisoissa 10. sija</td>
                </tr>
                <tr>
                    <th>2017</th>
                    <td><b>Sonja Wilmari</b><br />
                        Bikini fitness beginners +168 cm, 2. sija<br />
                        Bikini fitness yleinen sarja +168 cm, 5. sija<br />
                        SM-kisat Lahdessa, Bikini fitness yleinen sarja +172 cm, 2. sija</td>
                </tr>
                <tr>
                    <th>2016</th>
                    <td><b>Mikael Leppänen</b><br />
                        Men's Physique -174 cm Jyväskylässä, 5. sija<br />
                        SM-kisat -174 cm Lahdessa, 9. sija</td>
                </tr>
                <tr>
                    <th></th>
                    <td><b>Clarissa Pajukoski</b><br />
                        Bikini fitness beginners -160 cm Jyväskylän karsinnat, 2. sija<br />
                        SM-kisat Lahdessa, 8. sija</td>
                </tr>
                <tr>
                    <th></th>
                    <td><b>Aleksandra Siponen</b><br />
                        Bikini fitness beginners -168 cm, 3. sija</td>
                </tr>
                <tr>
                    <th></th>
                    <td><b>Miia Säilä</b><br />
                        Fitness-juniorit, 1. sija<br />
                        Yleinen sarja, 2. sija</td>
                </tr>
                <tr>
                    <th>2015</th>
                    <td><b>Miia Säilä</b><br />
                        EM-karsinnat Helsingissä, Fitness-juniorit, 1. sija<br />
                        Yleisen sarjan 2. sija<br />
                        Junioreiden EM-kilpailuissa 4. sija
                    </td>
                </tr>
                <tr>
                    <th>2014</th>
                    <td><b>Maarit Suomenkorpi</b><br />
                        Bikini fitness masters +35 v -sarjassa 4.sija</td>
                </tr>
                <tr>
                    <th>2013</th>
                    <td><b>Maarit Suomenkorpi</b><br />
                        Bikini fitness masters-sarjan SM-kultaa</td>
                </tr>
                <tr>
                    <th></th>
                    <td><b>Tino Lindgren</b><br />
                        Classic bodybuilding -juniorit SM 9. sija</td>
                </tr>
                <tr>
                    <th></th>
                    <td><b>Sergueev Gueorgui</b><br />
                        Men's Physique SM 7. sija</td>
                </tr>
                <tr>
                    <th>2012</th>
                    <td><b>Maarit Suomenkorpi</b><br />
                        Bikini fitness -tulokkaiden 7. sija</td>
                </tr>
                <tr>
                    <th></th>
                    <td><b>Anne Nyman</b><br />
                        Bikini fitness tulokkaiden kultaa Jyväskylässä<br />
                        Bikini fitness +168cm SM-karsinnan kultaa Lappeenrannassa<br />
                        Bikini fitness +168cm SM-hopeaa</td>
                </tr>
                <tr>
                    <th>2011</th>
                    <td><b>Juha Ketola</b><br />
                        Noviisien SM-kehonrakennus Oulussa, hopeaa<br />
                        Yleinen kehonrakennus SM 5. sija<br />
                        +90 kg SM 5. sija</td>
                </tr>
                <tr>
                    <th>2009</th>
                    <td><b>Anna Karrila</b><br />
                        Nuorten Bikini fitness SM-1<br />
                        Classic bodybuilding SM-kultaa<br />
                        Bikini fitness pronssia</td>
                </tr>
                <tr>
                    <th></th>
                    <td><b>Maria Kuure</b><br />
                        Bikini fitness +163 cm SM-kultaa<br />
                        Overall-voitto</td>
                </tr>
                <tr>
                    <th>2008</th>
                    <td><b>Anna Karrila</b><br />
                        Nuorten Bikini fitness SM-1</td>
                </tr>
                <tr>
                    <th>2007</th>
                    <td><b>Anna Karrila</b><br />
                        Nuorten Bikini fitness SM-1</td>
                </tr>
                <tr>
                    <th>2002</th>
                    <td><b>Antti Huttunen</b><br />
                        Fitness-miehet SM-kultaa</td>
                </tr>
            </tbody>
        </Table>
    )
}
export default Saavutukset