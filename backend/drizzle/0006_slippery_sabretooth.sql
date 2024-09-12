CREATE TABLE IF NOT EXISTS "email_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"link" text,
	"isActive" boolean DEFAULT false NOT NULL,
	"user_id" integer
);
--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "email_links" ADD CONSTRAINT "email_links_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
