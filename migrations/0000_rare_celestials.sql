CREATE TABLE `posts` (
	`id` integer PRIMARY KEY NOT NULL,
	`uuid` text(256) NOT NULL,
	`title` text(128) NOT NULL,
	`text` text(2048) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `posts_uuid_unique` ON `posts` (`uuid`);