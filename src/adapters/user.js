
export const createUser = (data) => {
  return {
    id: data.id,
    email: data.email,
    name: data.name,
    avatar: data.avatar_url,
    isPro: data.is_pro
  };
};
