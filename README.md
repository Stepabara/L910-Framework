# L910-Framework

## Вариант 4 — Музей
**Сущности:**
- exhibits.json — экспонаты (string: title, number: year, boolean: onDisplay, Date: acquiredAt, Array: tags)
- tickets.json — билеты (string: type, number: price, boolean: isAvailable, Date: validFrom, Array: benefits)

**Маршруты:**
- GET /exhibits, GET /exhibits/:id, POST /exhibits, PUT /exhibits/:id, PATCH /exhibits/:id, DELETE /exhibits/:id
- GET /tickets, GET /tickets/:id, POST /tickets, PUT /tickets/:id, PATCH /tickets/:id, DELETE /tickets/:id

---

## Вариант 15 — Аптека
**Сущности:**
- medicines.json — лекарства (string: name, number: price, boolean: prescription, Date: manufacturedAt, Array: components)
- orders.json — заказы (string: customer, number: total, boolean: paid, Date: createdAt, Array: items)

**Маршруты:**
- GET /medicines, GET /medicines/:id, POST /medicines, PUT /medicines/:id, PATCH /medicines/:id, DELETE /medicines/:id
- GET /orders, GET /orders/:id, POST /orders, PUT /orders/:id, PATCH /orders/:id, DELETE /orders/:id

---

## Вариант 17 — Философия
**Сущности:**
- philosophers.json — философы (string: name, number: born, boolean: famous, Date: addedAt, Array: works)
- concepts.json — концепции (string: title, number: complexity, boolean: disputed, Date: notedAt, Array: schools)

**Маршруты:**
- GET /philosophers, GET /philosophers/:id, POST /philosophers, PUT /philosophers/:id, PATCH /philosophers/:id, DELETE /philosophers/:id
- GET /concepts, GET /concepts/:id, POST /concepts, PUT /concepts/:id, PATCH /concepts/:id, DELETE /concepts/:id

---

## Вариант 19 — Автомобили
**Сущности:**
- cars.json — автомобили (string: model, number: price, boolean: inStock, Date: arrivedAt, Array: features)
- dealers.json — дилеры (string: name, number: rating, boolean: authorized, Date: registeredAt, Array: brands)

**Маршруты:**
- GET /cars, GET /cars/:id, POST /cars, PUT /cars/:id, PATCH /cars/:id, DELETE /cars/:id
- GET /dealers, GET /dealers/:id, POST /dealers, PUT /dealers/:id, PATCH /dealers/:id, DELETE /dealers/:id
