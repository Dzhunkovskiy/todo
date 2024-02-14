import React, { Component } from 'react'
import './app.css'
import AppHeader from '../app-header'
import MainSection from '../main-section'

export default class App extends Component {
    render() {
        return (
            <section className='todoapp'>
                <AppHeader />
                <MainSection />
            </section>
        )
    }
}
