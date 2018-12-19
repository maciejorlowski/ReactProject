import PanelFooter from "react-bootstrap/es/PanelFooter";
import React, {Component} from 'react';
import './css/head.css';


class Footer extends Component {
    render() {
        return (
            <PanelFooter id="footer" >
                <div className="underFooter">
                    <tr>
                        <th> Temat Pracy: &ensp;</th>
                        <th> Strona filmowa</th>
                    </tr>
                    <tr>
                        <th>Wykonali: &ensp;</th>
                        <th>Maciej Orłowski&ensp;</th>
                        <th>Tomasz  Łoszczyk&ensp;</th>
                        <th>Przemysław Niemirówko&ensp;</th>
                    </tr>
                </div>
            </PanelFooter>

        );
    }
}

export default Footer;


