const updateCart = async ({products, userId}) => {
    const res = await fetch("/api/cart/update", {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({userId:userId,products:products})
    })
    console.log(res);
}

export default updateCart;