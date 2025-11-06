"use client"
import React, { useState } from 'react';

interface ISearch { // props from /app/albums/layout.tsx
    onSearch: (term: string) => void;
}

const SearchBar = ({ onSearch }: ISearch) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchTerm.trim() !== '') {
            onSearch(searchTerm);
        }
    };

    return (
        <>
            <div className='flex bg-yellow-100 flex-wrap justify-end'>

                <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
                    
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            value={searchTerm}
                            onChange={handleInputChange}
                            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    
                    
                        <button
                            type="submit"
                            style={{ padding: '8px 16px', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', border: 'none' }}
                        >
                            Rechercher
                        </button>

                    
                </form>

            </div >
        </>
    );
};

export default SearchBar;
