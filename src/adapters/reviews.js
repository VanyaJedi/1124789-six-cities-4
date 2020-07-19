
export const createReview = (data) => {
  return {
    id: data.id.toString(),
    text: data.comment,
    rate: data.rating,
    userName: data.user.name,
    date: new Date(data.date),
    avatar: data.user.avatar_url,
    isPro: data.user.is_pro,
  };
};
