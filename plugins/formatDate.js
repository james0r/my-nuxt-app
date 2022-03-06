export default (context, inject) => {
  inject('formatDate', dateObj => {
    const options = {
      day: 'numeric',
      month: 'long', //to display the full name of the month
      year: 'numeric',
    }

    return dateObj.toLocaleDateString("en-US", options);
  })
}