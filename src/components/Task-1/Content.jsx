import React from 'react';

export default class Content extends React.Component {
    constructor(props) {
        super(props)
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    getRandomColor() {
        return "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    }

    setRandomColor(event) {
        event.target.style.background = this.getRandomColor();
        event.target.style.color = this.getRandomColor();
    }

    render() {
        return (
            <div>
                <p style={{ cursor: 'pointer' }} onClick={this.setRandomColor}>
                    Дата і місце народження: 10 грудня, 2003 року, м. Київ
                </p>
                <p style={{ cursor: 'pointer' }} onClick={this.setRandomColor}>
                    Освіта: Софіївсько-Борщагівський ліцей; <br/>КПІ ім. Ігоря
                    Сікорського, м. Київ
                </p>
                <p><em>Хоббі:</em></p>
                <ul>
                    <li>Гра на фортепіано</li>
                    <li>Теніс</li>
                    <li>Настільні ігри</li>
                    <li>Малювання</li>
                </ul>
                <p><em>Улюблені фільми:</em></p>
                <ol>
                    <li>"Інтерстеллар", 2014</li>
                    <li>"З міркувань совісті", 2016</li>
                    <li>"Залізна людина", 2010</li>
                </ol>
                <p>
                    Люблін — місто, яке називають столицею східної Польщі — є найбільшим і
                    найбільш швидкозростаючим містом<br />
                    на правому березі Вісли. Як столиця люблінського воєводства, служить
                    адміністативним, економічним, <br />а також культурним центром регіону.
                    Багата, семивікова історія Любліна, а також його розташування у <br />
                    багатокультурному середовищі зумовлюють його особливі якості. Це чарівне
                    місце привертає до себе увагу <br />унікальним кліматом, пишною
                    архітектурою, незліченними пам'ятниками.
                </p>
                <a href="https://lublin.eu/ua/lublin/about-the-city/" target="_blank">
                    <img
                        src="https://www.polscha.travel/images/uk-UA/miasta/lublin_stare_miasto_2_1170.jpg"
                        alt="Фото м. Люблін" style={{ width: 450, borderRadius: 10}}
                    />
                </a>
            </div>
        )
    }
}