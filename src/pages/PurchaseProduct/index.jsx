import React, { useState } from 'react';
import productMarketplace from '../../ProductMarketplace'
import web3 from '../../web3';
const PurchaseProduct = () => {
    const [productId, setProductId] = useState(0); // ID sản phẩm
    const [quantity, setQuantity] = useState(1); // Số lượng sản phẩm

    const handlePurchase = async () => {
        const accounts = await web3.eth.getAccounts(); // Lấy tài khoản từ MetaMask

        // Lấy thông tin sản phẩm từ hợp đồng (tuỳ thuộc vào hàm trong hợp đồng của bạn)
        const product = await productMarketplace.methods.products(productId).call();

        const totalPrice = product.productPrice; // Tính tổng giá
        try {
            // Gọi hàm PurchaseProduct trên hợp đồng và truyền vào thông tin cần thiết
            const result = await productMarketplace.methods.purchaseProduct(productId, quantity).send({
                from: accounts[0],
                value: totalPrice // Gửi Ether tương ứng với giá trị tổng
            });
        } catch (error) {
            console.error("Error purchasing product:", error);
        }
    };

    return (
        <div>
            <h1>Purchase Product</h1>
            <input
                type="number"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                placeholder="Product ID"
            />
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Quantity"
            />
            <button onClick={handlePurchase}>Purchase</button>
        </div>
    );
};

export default PurchaseProduct;
