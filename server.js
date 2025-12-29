const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <h1>Фреймворк L910</h1>
    <p>Доступные API эндпоинты:</p>
    <ul>
      <li><a href="/exhibits">/exhibits</a> - Экспонаты музея</li>
      <li><a href="/medicines">/medicines</a> - Лекарства</li>
      <li><a href="/philosophers">/philosophers</a> - Философы</li>
      <li><a href="/cars">/cars</a> - Автомобили</li>
      <li><a href="/dealers">/dealers</a> - Дилеры</li>
      <li><a href="/tickets">/tickets</a> - Билеты</li>
      <li><a href="/orders">/orders</a> - Заказы аптеки</li>
      <li><a href="/concepts">/concepts</a> - Философские концепции</li>
    </ul>
  `);
});

let exhibits = require('./data/museum/exhibits.json');

app.get('/exhibits', (req, res) => {
  res.json(exhibits);
});

app.get('/exhibits/:id', (req, res) => {
  const exhibit = exhibits.find(e => e.id == req.params.id);
  if (!exhibit) return res.status(404).json({ error: 'Exhibit not found' });
  res.json(exhibit);
});

app.post('/exhibits', (req, res) => {
  const newExhibit = req.body;
  if (!newExhibit.title || !newExhibit.year) {
    return res.status(400).json({ error: 'Invalid exhibit payload' });
  }
  newExhibit.id = exhibits.length ? exhibits[exhibits.length - 1].id + 1 : 1;
  exhibits.push(newExhibit);
  fs.writeFileSync('./data/museum/exhibits.json', JSON.stringify(exhibits, null, 2));
  res.status(201).json(newExhibit);
});

app.put('/exhibits/:id', (req, res) => {
  const idx = exhibits.findIndex(e => e.id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Exhibit not found' });
  const updated = { ...req.body, id: exhibits[idx].id };
  exhibits[idx] = updated;
  fs.writeFileSync('./data/museum/exhibits.json', JSON.stringify(exhibits, null, 2));
  res.json(updated);
});

app.patch('/exhibits/:id', (req, res) => {
  const exhibit = exhibits.find(e => e.id == req.params.id);
  if (!exhibit) return res.status(404).json({ error: 'Exhibit not found' });
  Object.assign(exhibit, req.body);
  fs.writeFileSync('./data/museum/exhibits.json', JSON.stringify(exhibits, null, 2));
  res.json(exhibit);
});

app.delete('/exhibits/:id', (req, res) => {
  const idx = exhibits.findIndex(e => e.id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Exhibit not found' });
  const deleted = exhibits.splice(idx, 1);
  fs.writeFileSync('./data/museum/exhibits.json', JSON.stringify(exhibits, null, 2));
  res.json(deleted[0]);
});

let medicines = require('./data/pharmacy/medicines.json');

app.get('/medicines', (req, res) => res.json(medicines));
app.get('/medicines/:id', (req, res) => {
  const m = medicines.find(x => x.id == req.params.id);
  if (!m) return res.status(404).json({ error: 'Medicine not found' });
  res.json(m);
});
app.post('/medicines', (req, res) => {
  const newMed = req.body;
  if (!newMed.name) return res.status(400).json({ error: 'Invalid medicine payload' });
  newMed.id = medicines.length ? medicines[medicines.length - 1].id + 1 : 1;
  medicines.push(newMed);
  fs.writeFileSync('./data/pharmacy/medicines.json', JSON.stringify(medicines, null, 2));
  res.status(201).json(newMed);
});
app.put('/medicines/:id', (req, res) => {
  const idx = medicines.findIndex(m => m.id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Medicine not found' });
  const updated = { ...req.body, id: medicines[idx].id };
  medicines[idx] = updated;
  fs.writeFileSync('./data/pharmacy/medicines.json', JSON.stringify(medicines, null, 2));
  res.json(updated);
});
app.patch('/medicines/:id', (req, res) => {
  const medicine = medicines.find(m => m.id == req.params.id);
  if (!medicine) return res.status(404).json({ error: 'Medicine not found' });
  Object.assign(medicine, req.body);
  fs.writeFileSync('./data/pharmacy/medicines.json', JSON.stringify(medicines, null, 2));
  res.json(medicine);
});
app.delete('/medicines/:id', (req, res) => {
  const idx = medicines.findIndex(m => m.id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Medicine not found' });
  const deleted = medicines.splice(idx, 1);
  fs.writeFileSync('./data/pharmacy/medicines.json', JSON.stringify(medicines, null, 2));
  res.json(deleted[0]);
});

let philosophers = require('./data/philosophy/philosophers.json');

app.get('/philosophers', (req, res) => res.json(philosophers));
app.get('/philosophers/:id', (req, res) => {
  const p = philosophers.find(x => x.id == req.params.id);
  if (!p) return res.status(404).json({ error: 'Philosopher not found' });
  res.json(p);
});
app.post('/philosophers', (req, res) => {
  const newPh = req.body;
  if (!newPh.name) return res.status(400).json({ error: 'Invalid philosopher payload' });
  newPh.id = philosophers.length ? philosophers[philosophers.length - 1].id + 1 : 1;
  philosophers.push(newPh);
  fs.writeFileSync('./data/philosophy/philosophers.json', JSON.stringify(philosophers, null, 2));
  res.status(201).json(newPh);
});
app.put('/philosophers/:id', (req, res) => {
  const idx = philosophers.findIndex(p => p.id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Philosopher not found' });
  const updated = { ...req.body, id: philosophers[idx].id };
  philosophers[idx] = updated;
  fs.writeFileSync('./data/philosophy/philosophers.json', JSON.stringify(philosophers, null, 2));
  res.json(updated);
});
app.patch('/philosophers/:id', (req, res) => {
  const philosopher = philosophers.find(p => p.id == req.params.id);
  if (!philosopher) return res.status(404).json({ error: 'Philosopher not found' });
  Object.assign(philosopher, req.body);
  fs.writeFileSync('./data/philosophy/philosophers.json', JSON.stringify(philosophers, null, 2));
  res.json(philosopher);
});
app.delete('/philosophers/:id', (req, res) => {
  const idx = philosophers.findIndex(p => p.id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Philosopher not found' });
  const deleted = philosophers.splice(idx, 1);
  fs.writeFileSync('./data/philosophy/philosophers.json', JSON.stringify(philosophers, null, 2));
  res.json(deleted[0]);
});

let cars = require('./data/cars/cars.json'); 

app.get('/cars', (req, res) => res.json(cars));
app.get('/cars/:id', (req, res) => {
  const c = cars.find(x => x.id == req.params.id);
  if (!c) return res.status(404).json({ error: 'Car not found' });
  res.json(c);
});
app.post('/cars', (req, res) => {
  const newCar = req.body;
  if (!newCar.model) return res.status(400).json({ error: 'Invalid car payload' });
  newCar.id = cars.length ? cars[cars.length - 1].id + 1 : 1;
  cars.push(newCar);
  fs.writeFileSync('./data/cars/cars.json', JSON.stringify(cars, null, 2)); 
  res.status(201).json(newCar);
});
app.put('/cars/:id', (req, res) => {
  const idx = cars.findIndex(c => c.id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Car not found' });
  const updated = { ...req.body, id: cars[idx].id };
  cars[idx] = updated;
  fs.writeFileSync('./data/cars/cars.json', JSON.stringify(cars, null, 2)); 
  res.json(updated);
});
app.patch('/cars/:id', (req, res) => {
  const car = cars.find(c => c.id == req.params.id);
  if (!car) return res.status(404).json({ error: 'Car not found' });
  Object.assign(car, req.body);
  fs.writeFileSync('./data/cars/cars.json', JSON.stringify(cars, null, 2)); 
  res.json(car);
});
app.delete('/cars/:id', (req, res) => {
  const idx = cars.findIndex(c => c.id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Car not found' });
  const deleted = cars.splice(idx, 1);
  fs.writeFileSync('./data/cars/cars.json', JSON.stringify(cars, null, 2)); 
  res.json(deleted[0]);
});


let dealers = require('./data/cars/dealers.json');
app.get('/dealers', (req, res) => res.json(dealers));
app.get('/dealers/:id', (req, res) => {
  const d = dealers.find(x => x.id == req.params.id);
  if (!d) return res.status(404).json({ error: 'Dealer not found' });
  res.json(d);
});

let tickets = require('./data/museum/tickets.json');
app.get('/tickets', (req, res) => res.json(tickets));
app.get('/tickets/:id', (req, res) => {
  const t = tickets.find(x => x.id == req.params.id);
  if (!t) return res.status(404).json({ error: 'Ticket not found' });
  res.json(t);
});

let orders = require('./data/pharmacy/orders.json');
app.get('/orders', (req, res) => res.json(orders));
app.get('/orders/:id', (req, res) => {
  const o = orders.find(x => x.id == req.params.id);
  if (!o) return res.status(404).json({ error: 'Order not found' });
  res.json(o);
});

let concepts = require('./data/philosophy/concepts.json');
app.get('/concepts', (req, res) => res.json(concepts));
app.get('/concepts/:id', (req, res) => {
  const c = concepts.find(x => x.id == req.params.id);
  if (!c) return res.status(404).json({ error: 'Concept not found' });
  res.json(c);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Visit http://localhost:${PORT} for API documentation`);
});