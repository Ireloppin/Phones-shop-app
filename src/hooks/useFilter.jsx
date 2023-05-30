import React from 'react'

const useFilter = ({filtered, filter, setFiltered}) => {

    const newProducts = filtered.filter((product) => 
        product.brand.toLowerCase().includes(filter.toLowerCase()) 
        ||
        product.model.toLowerCase().includes(filter.toLowerCase())
    );
    setFiltered(newProducts) 
  return {filtered}
}

export default useFilter