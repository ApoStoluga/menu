export default function handler(req, res) {
  res.status(200).json(
    [
      {
        title: "Monday",
        title_uk: "Понеділок",
        meal: [
          {
            title: 'Сніданок',
            products: [
              {
                category: "milk",
                title: "Яйця",
                id: "eggs",
                amount: 2,
                double: false,
                weight: null,
                original_weight: null
              },
              {
                category: 'cereals',
                title: "Вівсянка",
                id: "oat",
                amount: null,
                double: false,
                weight: 100,
                original_weight: 45
              },
              {
                category: 'fruit',
                title: "Апельсини",
                id: "orange",
                amount: 1,
                double: false,
                weight: null,
                original_weight: null
              }
            ]
          },
          {
            title: 'Полуденок',
            products: [
              {
                category: "milk",
                title: "Йогурт",
                id: "yogurt",
                amount: null,
                double: true,
                weight: 100,
                original_weight: 100
              },
              {
                category: 'fruit',
                title: "Фрукти",
                id: "fruit",
                amount: null,
                double: true,
                weight: 200,
                original_weight: 200
              }
            ]
          },
          {
            title: 'Обід',
            products: [
              {
                category: "meat",
                title: "Курятина",
                id: "chicken",
                amount: null,
                double: true,
                weight: 100,
                original_weight: 125
              },
              {
                category: 'cereals',
                title: "Крупа",
                id: "cereals",
                amount: null,
                double: true,
                weight: 100,
                original_weight: 40
              },
              {
                category: 'vegetables',
                title: "Салат",
                id: "salad",
                amount: null,
                double: true,
                weight: 150,
                original_weight: 150
              }
            ]
          },
          {
            title: 'Підвечірок',
            products: [
              {
                category: "milk",
                title: "Сир кисломолочний",
                id: "cheese",
                amount: null,
                double: true,
                weight: 100,
                original_weight: 100
              },
              {
                category: 'fruit',
                title: "Фрукти",
                id: "fruit",
                amount: 1,
                double: true,
                weight: null,
                original_weight: null
              }
            ]
          },
          {
            title: 'Вечеря',
            products: [
              {
                category: "meat",
                title: "Риба",
                id: "fish",
                amount: null,
                double: false,
                weight: 200,
                original_weight: 240
              },
              {
                "onlyInna": true,
                "category": "meat",
                "title": "Риба",
                "id": "fish",
                "double": false,
                "weight": "100",
                "original_weight": 120
              },
              {
                category: 'vegetables',
                title: "Салат",
                id: "salad",
                amount: null,
                double: true,
                weight: 200,
                original_weight: 200
              },
              {
                category: 'fruit',
                title: "Яблуко",
                id: "apple",
                amount: 1,
                double: true,
                weight: null,
                original_weight: null
              }
            ]
          },
          {
            title: 'Перед сном',
            products: [
              {
                "onlyInna": false,
                "category": "milk",
                "title": "Яйця",
                "id": "eggs",
                "amount": "2",
                "double": false
              }
            ]
          }
        ]
      },
      {
        title: "Tuesday",
        title_uk: "Вівторок",
        meal: [
          {
            title: 'Сніданок',
            products: [
              {
                "onlyInna": false,
                "category": "cereals",
                "title": "Мюслі",
                "id": "muesli",
                "double": false,
                "weight": "100"
              }, {
                "onlyInna": false,
                "category": "milk",
                "title": "Кефір",
                "id": "old_milk",
                "double": false,
                "weight": "200"
              }, {
                "onlyInna": false,
                "category": "fruit",
                "title": "Банан",
                "id": "banana",
                "amount": "1",
                "double": false
              }
            ]
          },
          {
            title: 'Полуденок',
            products: [
              {
                "onlyInna": false,
                "category": "milk",
                "title": "Сир кисломолочний",
                "id": "cheese",
                "double": true,
                "weight": "100"
              }, {
                "onlyInna": false,
                "category": "fruit",
                "title": "Апельсини",
                "id": "orange",
                "amount": "1",
                "double": true
              }
            ]
          },
          {
            title: 'Обід',
            products: [
              {
                "onlyInna": false,
                "category": "meat",
                "title": "Курятина",
                "id": "chicken",
                "double": true,
                "weight": "150",
                "original_weight": 187.5
              }, {
                "onlyInna": false,
                "category": "vegetables",
                "title": "Картопля",
                "id": "potato",
                "amount": "1",
                "double": true
              },
              {
                "onlyInna": false,
                "category": "fruit",
                "title": "Яблуко",
                "id": "apple",
                "amount": "1",
                "double": true
              }
            ]
          },
          {
            title: 'Підвечірок',
            products: [
              {
                "onlyInna": false,
                "category": "fruit",
                "title": "Фрукти",
                "id": "fruit",
                "double": true,
                "weight": "200",
                "original_weight": "200"
              }, {
                "onlyInna": false,
                "category": "milk",
                "title": "Йогурт",
                "id": "yogurt",
                "double": true,
                "weight": "100",
                "original_weight": "100"
              }
            ]
          },
          {
            title: 'Вечеря',
            products: [
              {
                "onlyInna": false,
                "category": "meat",
                "title": "Риба",
                "id": "fish",
                "double": false,
                "weight": "150",
                "original_weight": 180
              },
              {
                "onlyInna": true,
                "category": "meat",
                "title": "Риба",
                "id": "fish",
                "double": false,
                "weight": "75",
                "original_weight": 90
              },
              {
                "onlyInna": false,
                "category": "vegetables",
                "title": "Салат",
                "id": "salad",
                "double": true,
                "weight": "300",
                "original_weight": "300"
              }
            ]
          },
          {
            title: 'Перед сном',
            products: [
              {
                "onlyInna": false,
                "category": "milk",
                "title": "Яйця",
                "id": "eggs",
                "amount": "2",
                "double": false
              }
            ]
          }
        ]
      },
      {
        title: "Wednesday",
        title_uk: "Середа",
        meal: [
          {
            title: 'Сніданок',
            products: [
              {
                "onlyInna": false,
                "category": "cereals",
                "title": "Вівсянка",
                "id": "oat",
                "double": false,
                "weight": "100",
                "original_weight": 40
              }, {
                "onlyInna": false,
                "category": "milk",
                "title": "Яйця",
                "id": "eggs",
                "amount": "1",
                "double": false
              }
            ]
          },
          {
            title: 'Полуденок',
            products: [
              {
                "onlyInna": false,
                "category": "milk",
                "title": "Сир кисломолочний",
                "id": "cheese",
                "double": true,
                "weight": "100",
                "original_weight": "100"
              }, {
                "onlyInna": false,
                "category": "fruit",
                "title": "Банан",
                "id": "banana",
                "amount": "1",
                "double": true
              }
            ]
          },
          {
            title: 'Обід',
            products: [
              {
                "onlyInna": false,
                "category": "meat",
                "title": "Риба",
                "id": "fish",
                "double": false,
                "weight": "200",
                "original_weight": 240
              },
              {
                "onlyInna": true,
                "category": "meat",
                "title": "Риба",
                "id": "fish",
                "double": false,
                "weight": "100",
                "original_weight": 120
              },
              {
                "onlyInna": false,
                "category": "cereals",
                "title": "Крупа",
                "id": "cereals",
                "double": true,
                "weight": "100",
                "original_weight": 45
              }, {
                "onlyInna": false,
                "category": "vegetables",
                "title": "Салат",
                "id": "salad",
                "double": true,
                "weight": "150",
                "original_weight": "150"
              }
            ]
          },
          {
            title: 'Підвечірок',
            products: [
              {
                "onlyInna": false,
                "category": "fruit",
                "title": "Фрукти",
                "id": "fruit",
                "double": true,
                "weight": "200",
                "original_weight": "200"
              }, {
                "onlyInna": false,
                "category": "milk",
                "title": "Йогурт",
                "id": "yogurt",
                "double": true,
                "weight": "100",
                "original_weight": "100"
              }
            ]
          },
          {
            title: 'Вечеря',
            products: [
              {
                "onlyInna": false,
                "category": "meat",
                "title": "Курятина",
                "id": "chicken",
                "double": true,
                "weight": "100",
                "original_weight": 125
              }, {
                "onlyInna": false,
                "category": "vegetables",
                "title": "Капуста",
                "id": "cabbage",
                "double": true,
                "weight": "200",
                "original_weight": 240
              }
            ]
          },
          {
            title: 'Перед сном',
            products: [
              {
                "onlyInna": false,
                "category": "milk",
                "title": "Яйця",
                "id": "eggs",
                "amount": "2",
                "double": false
              }
            ]
          }
        ]
      },
      {
        title: "Thursday",
        title_uk: "Четвер",
        meal: [
          {
            title: 'Сніданок',
            products: [
              {
                "onlyInna": false,
                "category": "cereals",
                "title": "Вівсянка",
                "id": "oat",
                "double": false,
                "weight": "100",
                "original_weight": 40
              }, {
                "onlyInna": false,
                "category": "fruit",
                "title": "Грейпфрут",
                "id": "grape",
                "amount": "1",
                "double": false
              }, {
                "onlyInna": false,
                "category": "milk",
                "title": "Кефір",
                "id": "old_milk",
                "double": false,
                "weight": "200",
                "original_weight": "200"
              }
            ]
          },
          {
            title: 'Полуденок',
            products: [
              {
                "onlyInna": false,
                "category": "milk",
                "title": "Сир кисломолочний",
                "id": "cheese",
                "double": true,
                "weight": "100",
                "original_weight": "100"
              }, {
                "onlyInna": false,
                "category": "fruit",
                "title": "Фрукти",
                "id": "fruit",
                "amount": "1",
                "double": true
              }
            ]
          },
          {
            title: 'Обід',
            products: [
              {
                "onlyInna": false,
                "category": "meat",
                "title": "Курятина",
                "id": "chicken",
                "double": true,
                "weight": "150",
                "original_weight": 187.5
              }, {
                "onlyInna": false,
                "category": "vegetables",
                "title": "Капуста",
                "id": "cabbage",
                "double": true,
                "weight": "200",
                "original_weight": 240
              }
            ]
          },
          {
            title: 'Підвечірок',
            products: [
              {
                "onlyInna": false,
                "category": "vegetables",
                "title": "Сік томатний",
                "id": "tomato_juice",
                "double": true,
                "weight": "250",
                "original_weight": "250"
              },
              {
                "onlyInna": false,
                "category": "cereals",
                "title": "Хлібці",
                "id": "bread",
                "amount": "2",
                "double": true
              }
            ]
          },
          {
            title: 'Вечеря',
            products: [
              {
                "onlyInna": false,
                "category": "meat",
                "title": "Яловичина",
                "id": "beef",
                "double": true,
                "weight": "120",
                "original_weight": 150
              }, {
                "onlyInna": false,
                "category": "vegetables",
                "title": "Суміш овочева",
                "id": "vegetables",
                "double": true,
                "weight": "200",
                "original_weight": "200"
              }
            ]
          },
          {
            title: 'Перед сном',
            products: [
              {
                "onlyInna": false,
                "category": "milk",
                "title": "Яйця",
                "id": "eggs",
                "amount": "2",
                "double": false
              }
            ]
          }
        ]
      },
      {
        title: "Friday",
        title_uk: "П'ятниця",
        meal: [
          {
            title: 'Сніданок',
            products: [
              {
                "onlyInna": false,
                "category": "cereals",
                "title": "Вівсянка",
                "id": "oat",
                "double": false,
                "weight": "100",
                "original_weight": 40
              }, {
                "onlyInna": false,
                "category": "fruit",
                "title": "Апельсини",
                "id": "orange",
                "amount": "1",
                "double": false
              }
            ]
          },
          {
            title: 'Полуденок',
            products: [
              {
                "onlyInna": false,
                "category": "vegetables",
                "title": "Сік томатний",
                "id": "tomato_juice",
                "double": true,
                "weight": "250",
                "original_weight": "250"
              }, {
                "onlyInna": false,
                "category": "cereals",
                "title": "Хлібці",
                "id": "bread",
                "amount": "2",
                "double": true
              }
            ]
          },
          {
            title: 'Обід',
            products: [
              {
                "onlyInna": false,
                "category": "meat",
                "title": "Курятина",
                "id": "chicken",
                "double": true,
                "weight": "150",
                "original_weight": 187.5
              }, {
                "onlyInna": false,
                "category": "cereals",
                "title": "Крупа",
                "id": "cereals",
                "double": true,
                "weight": "100",
                "original_weight": 45
              },
              {
                "onlyInna": false,
                "category": "vegetables",
                "title": "Салат",
                "id": "salad",
                "double": true,
                "weight": "100",
                "original_weight": "100"
              }
            ]
          },
          {
            title: 'Підвечірок',
            products: [
              {
                "onlyInna": false,
                "category": "milk",
                "title": "Сир кисломолочний",
                "id": "cheese",
                "double": true,
                "weight": "100",
                "original_weight": "100"
              }, {
                "onlyInna": false,
                "category": "fruit",
                "title": "Яблуко",
                "id": "apple",
                "amount": "1",
                "double": true
              }
            ]
          },
          {
            title: 'Вечеря',
            products: [
              {
                "onlyInna": false,
                "category": "meat",
                "title": "Курятина",
                "id": "chicken",
                "double": true,
                "weight": "100",
                "original_weight": 125
              },
              {
                "onlyInna": false,
                "category": "vegetables",
                "title": "Салат",
                "id": "salad",
                "double": true,
                "weight": "250",
                "original_weight": "250"
              }
            ]
          },
          {
            title: 'Перед сном',
            products: [
              {
                "onlyInna": false,
                "category": "milk",
                "title": "Яйця",
                "id": "eggs",
                "amount": "2",
                "double": false
              }
            ]
          }
        ]
      },
      {
        title: "Saturday",
        title_uk: "Субота",
        meal: [
          {
            title: 'Сніданок',
            products: [
              {
                "onlyInna": false,
                "category": "cereals",
                "title": "Вівсянка",
                "id": "oat",
                "double": false,
                "weight": "100",
                "original_weight": 40
              },
              {
                "onlyInna": false,
                "category": "milk",
                "title": "Кефір",
                "id": "old_milk",
                "double": false,
                "weight": "200",
                "original_weight": "200"
              }
            ]
          },
          {
            title: 'Полуденок',
            products: [
              {
                "onlyInna": false,
                "category": "milk",
                "title": "Сир кисломолочний",
                "id": "cheese",
                "double": true,
                "weight": "100",
                "original_weight": "100"
              }, {
                "onlyInna": false,
                "category": "fruit",
                "title": "Фрукти",
                "id": "fruit",
                "amount": "1",
                "double": true
              }
            ]
          },
          {
            title: 'Обід',
            products: [
              {
                "onlyInna": false,
                "category": "meat",
                "title": "Курятина",
                "id": "chicken",
                "double": true,
                "weight": "150",
                "original_weight": 187.5
            },
              {
                "onlyInna": false,
                "category": "cereals",
                "title": "Крупа",
                "id": "cereals",
                "double": true,
                "weight": "100",
                "original_weight": 45
              },
              {
                "onlyInna": false,
                "category": "vegetables",
                "title": "Салат",
                "id": "salad",
                "double": true,
                "weight": "100",
                "original_weight": "100"
              }
            ]
          },
          {
            title: 'Підвечірок',
            products: [
              {
                "onlyInna": false,
                "category": "fruit",
                "title": "Апельсини",
                "id": "orange",
                "amount": "1",
                "double": true
              },
              {
                "onlyInna": false,
                "category": "milk",
                "title": "Йогурт",
                "id": "yogurt",
                "double": true,
                "weight": "100",
                "original_weight": "100"
              }
            ]
          },
          {
            title: 'Вечеря',
            products: [
              {
                "onlyInna": false,
                "category": "meat",
                "title": "Черврна риба",
                "id": "red_fish",
                "double": true,
                "weight": "250",
                "original_weight": 300
              },
              {
                "onlyInna": false,
                "category": "vegetables",
                "title": "Суміш овочева",
                "id": "vegetables",
                "double": true,
                "weight": "200",
                "original_weight": "200"
              }
            ]
          },
          {
            title: 'Перед сном',
            products: [
              {
                "onlyInna": false,
                "category": "milk",
                "title": "Яйця",
                "id": "eggs",
                "amount": "2",
                "double": false
              }
            ]
          }
        ]
      },
      {
        title: "Sunday",
        title_uk: "Неділя",
        meal: [
          {
            title: 'Сніданок',
            products: [
              {
                "onlyInna": false,
                "category": "milk",
                "title": "Яйця",
                "id": "eggs",
                "amount": "2",
                "double": false
              }, {
                "onlyInna": false,
                "category": "fruit",
                "title": "Апельсини",
                "id": "orange",
                "amount": "1",
                "double": false
              }
            ]
          },
          {
            title: 'Полуденок',
            products: [
              {
                "onlyInna": false,
                "category": "milk",
                "title": "Сир кисломолочний",
                "id": "cheese",
                "double": true,
                "weight": "100",
                "original_weight": "100"
              },
              {
                "onlyInna": false,
                "category": "fruit",
                "title": "Банан",
                "id": "banana",
                "amount": "1",
                "double": true
              }
            ]
          },
          {
            title: 'Обід',
            products: [
              {
                "onlyInna": false,
                "category": "meat",
                "title": "Яловичина",
                "id": "beef",
                "double": true,
                "weight": "100",
                "original_weight": 125
              },
              {
                "onlyInna": false,
                "category": "vegetables",
                "title": "Суміш овочева",
                "id": "vegetables",
                "double": true,
                "weight": "200",
                "original_weight": "200"
              }
            ]
          },
          {
            title: 'Підвечірок',
            products: [
              {
                "onlyInna": false,
                "category": "milk",
                "title": "Йогурт",
                "id": "yogurt",
                "double": true,
                "weight": "100",
                "original_weight": "100"
              },
              {
                "onlyInna": false,
                "category": "fruit",
                "title": "Фрукти",
                "id": "fruit",
                "amount": "1",
                "double": true
              }
            ]
          },
          {
            title: 'Вечеря',
            products: [
              {
                "onlyInna": false,
                "category": "meat",
                "title": "Курятина",
                "id": "chicken",
                "double": true,
                "weight": "150",
                "original_weight": 187.5
              }, {
                "onlyInna": false,
                "category": "vegetables",
                "title": "Салат",
                "id": "salad",
                "double": true,
                "weight": "200",
                "original_weight": "200"
              }
            ]
          },
          {
            title: 'Перед сном',
            products: [
              {
                "onlyInna": false,
                "category": "milk",
                "title": "Яйця",
                "id": "eggs",
                "amount": "2",
                "double": false
              }
            ]
          }
        ]
      }
    ]
  )
}
