export const flattenData = data => {
  return Object.keys(data).map(menu_id => {
    const menu = data[menu_id];

    return {
      id: menu_id,
      name: menu.name,
      dish: Object.keys(menu.dish).map(dish_id => {
        const dish = menu.dish[dish_id];

        return {
          id: dish_id,
          name: dish.name,
          price: dish.price,
          addons: !dish.addons
          ? null
          : Object.keys(dish.addons).map(addon_id => {
            const addon = dish.addons[addon_id];

            return {
              id: addon_id,
              name: addon.name,
              price: addon.price
            };
          })
        };
      })
    };
  })
};