import React, { useEffect } from 'react';
import { setFilteredURL } from '../lib/filters';

const CleanFilterButton = () => {
    useEffect(() => {
        // Obtener el botón de "Clean Filter" mediante querySelector
        const cleanFilterBtn = document.querySelector('#cleanFilterBtn');

        // Agregar un event listener al botón
        const handleClick = () => {
            // Limpiar el localStorage
            localStorage.removeItem('filtroCompletado');
            
            // Llamar a setFilteredURL(null) si es necesario
            setFilteredURL(null); // Asegúrate de que esta función esté disponible aquí
            window.location.reload();
            alert('hey');
        };

        // Verificar si el botón se ha encontrado
        if (cleanFilterBtn) {
            cleanFilterBtn.addEventListener('click', handleClick);
        }

        // Limpiar el event listener al desmontar el componente
        return () => {
            if (cleanFilterBtn) {
                cleanFilterBtn.removeEventListener('click', handleClick);
            }
        };
    }, []); // Este efecto se ejecuta solo una vez después del montaje del componente

    return (
        <button id="cleanFilterBtn" className="hover:shadow-form w-full rounded-md bg-[#6A64F1] hover:bg-[#807aee] py-3 px-8 text-center text-base font-semibold text-white outline-none" type="button">
            Clean Filter
        </button>
    );
};

export default CleanFilterButton;
