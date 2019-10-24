<?php


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\Role;
use App\Post;
use App\PortfolioItem;
use App\Tutorial;

class UsersTableSeeder extends Seeder
{

    public function run()
    {
        factory(User::class, 5)->create()->each(function ($user) {
            $user->posts()->save(factory(Post::class)->make());
            $user->portfolioitems()->save(factory(PortfolioItem::class)->make());
            $user->tutorials()->save(factory(Tutorial::class)->make());
        });
    }
}
