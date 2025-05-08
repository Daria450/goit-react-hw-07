import React from 'react'
import Contact from '../Contact/Contact'
import s from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { HiH2 } from 'react-icons/hi2';

const ContactList = () => {

    const items = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filter.name);
    const error = useSelector((state) => state.contacts.isError);
    const loading = useSelector((state) => state.contacts.isLoading)


    const visibleContacts = items.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <ul>{visibleContacts.map(item =>
                <li key={item.id} className={s.li}><Contact name={item.name} number={item.number} id={item.id} /></li>)}
            </ul>
            {error && <h2>Server is dead...</h2>}
            {loading && <h2>Loading...</h2>}
        </>
    )
}

export default ContactList