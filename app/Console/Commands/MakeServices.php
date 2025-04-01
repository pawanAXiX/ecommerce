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
    protected $files;
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new Service class';

    public function __construct(FileSystem $files){
        parent::__construct();
        $this->files=$files;
    }


    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name=$this->argument('name');
        $path=app_path('Services/'.$name.'.php');

        if($this->files->exists($path)){
            $this->error('Service '.$name.' already exists!');
            return false;
        }
        $stub=$this->getStub($name);
//        str_replace('{{name}}',$name,$stub);

        $this->files->ensureDirectoryExists(app_path('Services'));
        $this->files->put($path,$stub);

        $this->info('Service '.$name.' created successfully.');
    }

    public function getStub($name){
        return <<<EOT
<?php
namespace App\Services;

class $name{
//
}
EOT;


    }
}
