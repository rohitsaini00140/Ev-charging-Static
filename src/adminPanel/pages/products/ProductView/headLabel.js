export const headLabel = [
    { id: 'images', label: 'Images', align: 'center' },
    { id: 'title', label: 'Title' },
    { id: 'status', label: 'Status' },
    { id: 'brand', label: 'Brand' },
    { id: 'purchased', label: 'Purchased(₹)', align: 'center' },
    { id: 'selling', label: 'Selling(₹)', align: 'center' },
    { id: 'offered', label: 'Offered(₹)', align: 'center' },
    { id: 'created', label: 'Created' },
    { id: 'action', label: 'Action' }
]

export const fieldsToDownload = ["productTitle", "productStatus", "productBrand", "productPurchasedAmount", "productSellingAmount", "productOfferedAmount", "createdAt"]

export const fieldMapping = {
    productTitle: 'Title',
    productStatus: 'Status',
    productBrand: 'Brand',
    productPurchasedAmount: 'Purchased Amount',
    productSellingAmount: 'Selling Amount',
    productOfferedAmount: 'Offered Amount',
    createdAt: 'Created At',
};

export const filter = ["DESC", "ASC"]