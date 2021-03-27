export default function ({ store, redirect }) {
  const open = new Date('2021-03-27 9:25:00') <= new Date();
  store.commit('repair', open);
  if (!open) {
    return redirect('/');
  }
}
