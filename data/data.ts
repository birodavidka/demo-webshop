export const Products=[
  {
    productId: 1,
    productName: 'Product 1',
    productDescription: 'Description for Product 1',
    productPrice: 29.99,
    productImage: 'https://via.placeholder.com/150',
    productCategory: 'Category 1',
    productRating: 4.5,
    productStock: 100,
    productReviews: [
      {
        reviewId: 1,
        reviewText: 'Great product!',
        reviewRating: 5,
        reviewDate: '2023-10-01',
        reviewerName: 'Alice'
      },
    ]

  },
  {
    productId: 2,
    productName: 'Product 2',
    productDescription: 'Description for Product 2',
    productPrice: 49.99,
    productImage: 'https://via.placeholder.com/150',
    productCategory: 'Category 2',
    productRating: 4.0,
    productStock: 50,
    productReviews: [
      {
        reviewId: 2,
        reviewText: 'Good quality.',
        reviewRating: 4,
        reviewDate: '2023-10-02',
        reviewerName: 'Bob'
      },
    ]
  }
]

export const Categories = [
  {
    categoryId: 1,
    categoryName: 'Category 1',
    categoryDescription: 'Description for Category 1',
    categoryImage: 'https://via.placeholder.com/150'
  },
  {
    categoryId: 2,
    categoryName: 'Category 2',
    categoryDescription: 'Description for Category 2',
    categoryImage: 'https://via.placeholder.com/150'
  }
]


export const Payments =[
  {
    paymentId: 1,
    paymentMethod: 'Credit Card',
    paymentAmount: 29.99,
    paymentDate: '2023-10-01',
    paymentStatus: 'Completed'
  },
  {
    paymentId: 2,
    paymentMethod: 'PayPal',
    paymentAmount: 49.99,
    paymentDate: '2023-10-02',
    paymentStatus: 'Pending'
  },
  {
    paymentId: 3,
    paymentMethod: 'Bank Transfer',
    paymentAmount: 19.99,
    paymentDate: '2023-10-03',
    paymentStatus: 'Failed'
  }
]