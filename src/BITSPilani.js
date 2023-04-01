import hamburgerIcon from './images/hamburger-menu-icon.svg';
import wikiGlobe from './images/wiki-globe.png';
import './BITSPilani.css';

export default function BITSPilani() {
    return (
        <main className='main'>
            <section className='header'>
                <div className='top-header'>
                    <img src={hamburgerIcon} width='23.8' />
                    <header>
                        <div class='header-img-cont'>
                            <img src={wikiGlobe} width='30' />
                        </div>
                        <div id='title-container'>
                            <div id='main-heading'>
                                W<span>IKIPEDI</span>A
                            </div>
                            <div id='sub-heading'>The Free Encyclopedia</div>
                        </div>
                    </header>
                    <div
                        className='input-group mb-0'
                        style={{ width: '40vw', marginLeft: 'auto', marginRight: 'auto' }}
                    >
                        <div className='input-group-prepend'>
                            <span
                                className='input-group-text'
                                id='basic-addon1'
                                style={{ height: '3rem', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='16'
                                    height='16'
                                    fill='currentColor'
                                    class='bi bi-search'
                                    viewBox='0 0 16 16'
                                >
                                    <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                                </svg>
                            </span>
                        </div>
                        <input
                            type='text'
                            class='form-control'
                            placeholder='Search Wikipedia'
                            aria-label='Search'
                            aria-describedby='basic-addon1'
                        />
                    </div>
                    <button type='button' class='btn btn-primary'>
                        Create Account
                    </button>
                    <button type='button' class='btn btn-outline-primary'>
                        Log In
                    </button>
                </div>
                <div className='bottom-header'>
                    <b className='insti'>Birla Institute of Technology and Science, Pilani</b>
                    <div className='day-night-toggle'>
                        day/night
                        <input type='checkbox' checked data-toggle='toggle'></input>
                    </div>
                </div>
            </section>
            <section></section>
        </main>
    );
}
