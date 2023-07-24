let contacts = [
  {
    id: 'ot40-4tg-uui-cs2',
    name: 'Roger',
    email: 'roger@gmail.com',
    phone: '12342412',
    category_id: 'werdwe'
  },
  {
    id: 'ah34-fgn5-ff-34k-hr',
    name: 'Roger',
    email: 'roger@gmail.com',
    phone: '12342412',
    category_id: 'werdwe'
  },
];

class UserRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id: string){
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id)
    ));
  }

  delete(id: string){
    return new Promise((resolve) => resolve(
      contacts = contacts.filter((contact) => contact.id !== id)
    ));
  }

}

export default new UserRepository();
