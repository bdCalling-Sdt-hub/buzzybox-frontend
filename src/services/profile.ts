export const getProfile = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/profile`, {
            cache: 'no-store',
      });

      if (!res.ok) {
            throw new Error('Failed to fetch profile data');
      }

      return res.json();
};
