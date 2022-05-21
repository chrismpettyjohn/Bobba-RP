import 'dotenv/config';

export type DatabaseType = 'arcturus' | 'holo';

export const databaseType: DatabaseType = process.env.DATABASE_TYPE! as any;
