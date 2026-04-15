/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import About from './pages/About';
import AutomotiveQualityFuel from './pages/AutomotiveQualityFuel';
import BulkFuelSupply from './pages/BulkFuelSupply';
import Contact from './pages/Contact';
import DieselFuel from './pages/DieselFuel';
import Farming from './pages/Farming';
import FuelTankersHaulage from './pages/FuelTankersHaulage';
import Gasoline from './pages/Gasoline';
import GeneralGoods from './pages/GeneralGoods';
import GeneratorSets from './pages/GeneratorSets';
import EngineOils from './pages/EngineOils';
import Faqs from './pages/Faqs';
import FuelingStations from './pages/FuelingStations';
import Gallery from './pages/Gallery';
import GalleryPhoto from './pages/GalleryPhoto';
import PalmergHaulage from './pages/PalmergHaulage';
import PalmergPrestige from './pages/PalmergPrestige';
import RenewableEnergy from './pages/RenewableEnergy';
import Home from './pages/Home';
import LPGServices from './pages/LPGServices';
import NationwideFuel from './pages/NationwideFuel';
import SaltMining from './pages/SaltMining';
import SearchResults from './pages/SearchResults';
import Services from './pages/Services';
import Stations from './pages/Stations';
import TeamMember from './pages/TeamMember';


export const PAGES = {
    "About": About,
    "AutomotiveQualityFuel": AutomotiveQualityFuel,
    "BulkFuelSupply": BulkFuelSupply,
    "Contact": Contact,
    "DieselFuel": DieselFuel,
    "Farming": Farming,
    "FuelTankersHaulage": FuelTankersHaulage,
    "Gasoline": Gasoline,
    "GeneralGoods": GeneralGoods,
    "GeneratorSets": GeneratorSets,
    "EngineOils": EngineOils,
    "Faqs": Faqs,
    "FuelingStations": FuelingStations,
    "Gallery": Gallery,
    "GalleryPhoto": GalleryPhoto,
    "PalmergHaulage": PalmergHaulage,
    "PalmergPrestige": PalmergPrestige,
    "RenewableEnergy": RenewableEnergy,
    "Home": Home,
    "LPGServices": LPGServices,
    "NationwideFuel": NationwideFuel,
    "SaltMining": SaltMining,
    "SearchResults": SearchResults,
    "Services": Services,
    "Stations": Stations,
    "TeamMember": TeamMember,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
};