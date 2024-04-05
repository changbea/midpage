import { Link } from 'react-router-dom';
import logo from './logos/react.png'
import './Navigate.css'

export default function Navigate() {
    return (
        <div className='nav'>
            <Link to="/midpage/">
                <img src={logo} alt='react' width='5%' height='5%' />
            </Link>
            <br />
            <Link to="/midpage/drink">Drink&emsp;</Link>
            <Link to="/midpage/subway">Subway&emsp;</Link>
            <Link to="/midpage/cards">Cards&emsp;</Link>
            <Link to="/midpage/recommendations">Recommendations&emsp;</Link>
            <Link to="/midpage/resume">Resume&emsp;</Link>
            <Link to="/midpage/leagues">Leagues&emsp;</Link>
            <Link to="/midpage/gamersp">Gamersp&emsp;</Link>
            <Link to="/midpage/gamesrspextended">Gamesrspextended&emsp;</Link>
            <Link to="/midpage/gamefinding">Gamefinding&emsp;</Link>
            <Link to="/midpage/gameflipping">Gameflipping&emsp;</Link>
            <Link to="/midpage/gamehint">Gamehint&emsp;</Link>
            <Link to="/midpage/planning">Planning&emsp;</Link>
        </div>
    );      
}