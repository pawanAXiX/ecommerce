<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;


class MakeServices extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:service {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new Service class';

    public function __construct(public FileSystem $files)
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');
        $path = app_path('Services/' . $name . '.php');

        if ($this->files->exists($path)) {
            $this->error('Service ' . $name . ' already exists!');
            return false;
        }
        $stub = $this->getStub($name);

        $this->files->ensureDirectoryExists(app_path('Services'));
        $this->files->put($path, $stub);

        $this->info('Service ' . $name . ' created successfully.');
    }

    public function getStub($name)
    {
        return <<<EOT
<?php
namespace App\Services;

class $name{
//
}
EOT;


    }
}
