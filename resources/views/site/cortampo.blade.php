@extends('layouts.site')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-6 m-auto text-center">
                @if($tampo->cores)
                <h1 class="py-5">Escolha a cor da tampo</h1>
                @foreach ($tampo->cores as $cor)
                    <div class="py-3">
                        <img class="img-fluid" src="{{ Storage::url($cor->imagem) }}" alt="{{ $cor->nome }}">

                        <button
                            onclick="trocacorTampo(`{{ Storage::url($cor->imagem) }}`, `{{ $cor->nome }}`, `{{ $vitrine->id }}`)"
                            class="btn btn-primary">{{ $cor->nome }}</button>
                    </div>
                    <hr>
                @endforeach
                @else
                <h1>Não existe variação de cor para este produto!</h1>
                <a id="btn-tampos" class="botao-pages" href="/site/tampos/{{$vitrine->id}}">Próximo</a>
                @endif
            </div>
        </div>
        <a class="botao-voltar" href="#" onclick="window.history.back()">voltar</a>
    </div>
@endsection
